import { useEffect } from 'react';

import {
  BaseFontSize,
  CubeMouseTrackingStopSelector,
  FixedColumns,
  FixedCubeWidth,
  ProjectionScale,
  FixedRows,
  FrameDuration,
  FrameTolerance,
  IdleLogoAcceleration,
  IdleLogoYVelocity,
  IdleRotationAxis,
  IdleStartDelay,
  LogoRotationEventName,
  LogoRotationEventTimeout,
  LogoVelocityDeceleration,
  MaxDelta,
  MaxInheritedAngularVelocity,
  MinAngularVelocity,
  MouseInertiaDeceleration,
  MouseVelocityMemoryDamping,
  ReturnAcceleration,
  ReturnDeceleration,
  ReturnMaxSpeed,
  ReturnToInitialEpsilon,
} from './cube-constants.js';

import {
  clamp,
  cloneMatrix,
  createAxisAngleRotation,
  createScreenXRotation,
  createScreenYRotation,
  damp,
  dot,
  getRotationAngle,
  getRotationAxis,
  initialRotationMatrix,
  moveToward,
  multiplyMatrices,
  orthonormalizeMatrix,
  transposeMatrix,
} from './cube-math.js';

export function useAsciiCube(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    let width = 0;
    let height = 0;
    let pixelRatio = Math.min(window.devicePixelRatio || 1, 3);

    let columns = FixedColumns;
    let rows = FixedRows;
    let charWidth = 8;
    let charHeight = 13;

    let buffer = [];
    let zBuffer = new Float32Array(0);
    let animationFrameId = null;
    let lastFrameTime = null;

    const backgroundChar = '.';
    const distanceFromCam = 100;
    const incrementSpeed = 0.6;

    const rotationSensitivity = 0.004;

    const mouse = {
      isInside: false,
      lastX: 0,
      lastY: 0,
      lastTime: 0,
      hasLastPosition: false,

      clientX: 0,
      clientY: 0,
      hasClientPosition: false,
    };

    const motion = {
      xVelocity: 0,
      yVelocity: 0,

      logoTargetYVelocity: 0,
      lastLogoEventTime: 0,

      lastActivityTime: performance.now(),

      returnVelocity: 0,

      isLogoMode: false,
      isMouseInertiaMode: false,
      isIdleLogoMode: true,
      isReturningToInitialMode: false,
    };

    let rotationMatrix = initialRotationMatrix.map((row) => [...row]);

    function getZoomFactor() {
      return window.devicePixelRatio || 1;
    }

    function applyFontSettings() {
      ctx.font = `${BaseFontSize}px "Courier New", monospace`;

      charWidth = Math.ceil(ctx.measureText('M').width);
      charHeight = Math.ceil(BaseFontSize * 1.25);
    }

    function getCharAspectRatio() {
      return charWidth === 0 ? 1 : charHeight / charWidth;
    }

    function resetMouseTracking() {
      mouse.isInside = false;
      mouse.hasLastPosition = false;
      mouse.lastTime = 0;
    }

    function rememberMouseClientPosition(clientX, clientY) {
      mouse.clientX = clientX;
      mouse.clientY = clientY;
      mouse.hasClientPosition = true;
    }

    function getMouseTrackingRect() {
      const trackingArea = canvas.closest('[data-cube-tracking-area]');

      if (trackingArea) {
        return trackingArea.getBoundingClientRect();
      }

      return canvas.getBoundingClientRect();
    }

    function getMouseCanvasPosition(clientX, clientY) {
      const rect = getMouseTrackingRect();

      const currentX = clientX - rect.left;
      const currentY = clientY - rect.top;

      const isInside =
        currentX >= 0 &&
        currentX <= rect.width &&
        currentY >= 0 &&
        currentY <= rect.height;

      return {
        currentX,
        currentY,
        isInside,
      };
    }

    function startMouseInertia() {
      const hasVelocity =
        Math.abs(motion.xVelocity) > MinAngularVelocity ||
        Math.abs(motion.yVelocity) > MinAngularVelocity;

      motion.isMouseInertiaMode = hasVelocity;
    }

    function shouldStopMouseTracking(target) {
      return (
        target instanceof Element &&
        target.closest(CubeMouseTrackingStopSelector) !== null
      );
    }

    function getReturnRotationToInitial() {
      const currentInverse = transposeMatrix(rotationMatrix);
      const returnRotation = multiplyMatrices(
        initialRotationMatrix,
        currentInverse
      );

      let angle = getRotationAngle(returnRotation);
      let axis = getRotationAxis(returnRotation, angle);

      const idleDirection = IdleLogoYVelocity >= 0 ? 1 : -1;

      const isOppositeIdleDirection =
        dot(axis, IdleRotationAxis) * idleDirection < 0;

      if (isOppositeIdleDirection) {
        axis = [
          -axis[0],
          -axis[1],
          -axis[2],
        ];

        angle = Math.PI * 2 - angle;
      }

      return {
        angle,
        axis,
      };
    }

    function returnRotationMatrixToInitial(delta) {
      const { angle, axis } = getReturnRotationToInitial();

      if (angle <= ReturnToInitialEpsilon) {
        rotationMatrix = cloneMatrix(initialRotationMatrix);
        motion.returnVelocity = 0;
        return true;
      }

      const brakingDistance =
        (motion.returnVelocity * motion.returnVelocity) /
        (2 * ReturnDeceleration);

      if (brakingDistance >= angle) {
        motion.returnVelocity = Math.max(
          0,
          motion.returnVelocity - ReturnDeceleration * delta
        );
      } else {
        motion.returnVelocity = Math.min(
          ReturnMaxSpeed,
          motion.returnVelocity + ReturnAcceleration * delta
        );
      }

      const step = Math.min(motion.returnVelocity * delta, angle);
      const returnStepRotation = createAxisAngleRotation(axis, step);

      rotationMatrix = multiplyMatrices(returnStepRotation, rotationMatrix);
      rotationMatrix = orthonormalizeMatrix(rotationMatrix);

      return false;
    }

    function markActivity(now = performance.now()) {
      motion.lastActivityTime = now;

      if (motion.isIdleLogoMode || motion.isReturningToInitialMode) {
        motion.isIdleLogoMode = false;
        motion.isReturningToInitialMode = false;
        motion.xVelocity = 0;
        motion.yVelocity = 0;
        motion.returnVelocity = 0;
      }
    }

    function applyScreenRotationByAngles(yaw, pitch) {
      const screenYRotation = createScreenYRotation(yaw);
      const screenXRotation = createScreenXRotation(pitch);

      const screenRotation = multiplyMatrices(screenYRotation, screenXRotation);

      rotationMatrix = multiplyMatrices(screenRotation, rotationMatrix);
      rotationMatrix = orthonormalizeMatrix(rotationMatrix);
    }

    function applyScreenRotation(deltaX, deltaY) {
      const zoomFactor = getZoomFactor();

      const normalizedDeltaX = deltaX * zoomFactor;
      const normalizedDeltaY = deltaY * zoomFactor;

      const yaw = -normalizedDeltaX * rotationSensitivity;
      const pitch = normalizedDeltaY * rotationSensitivity;

      applyScreenRotationByAngles(yaw, pitch);
    }

    function rememberMouseVelocity(deltaX, deltaY, deltaTime) {
      const zoomFactor = getZoomFactor();

      const normalizedDeltaX = deltaX * zoomFactor;
      const normalizedDeltaY = deltaY * zoomFactor;

      const yawVelocity =
        (-normalizedDeltaX * rotationSensitivity) / deltaTime;

      const pitchVelocity =
        (normalizedDeltaY * rotationSensitivity) / deltaTime;

      motion.yVelocity = clamp(
        yawVelocity,
        -MaxInheritedAngularVelocity,
        MaxInheritedAngularVelocity
      );

      motion.xVelocity = clamp(
        pitchVelocity,
        -MaxInheritedAngularVelocity,
        MaxInheritedAngularVelocity
      );
    }

    function updateCubeMotion(delta) {
      const now = performance.now();

      const hasRecentLogoRotation =
        motion.lastLogoEventTime > 0 &&
        now - motion.lastLogoEventTime <= LogoRotationEventTimeout;

      const shouldStartIdleReturn =
        !hasRecentLogoRotation &&
        !motion.isLogoMode &&
        !motion.isMouseInertiaMode &&
        !motion.isIdleLogoMode &&
        !motion.isReturningToInitialMode &&
        now - motion.lastActivityTime >= IdleStartDelay;

      if (shouldStartIdleReturn) {
        motion.isReturningToInitialMode = true;
        motion.xVelocity = 0;
        motion.yVelocity = 0;
        motion.logoTargetYVelocity = 0;
        motion.returnVelocity = 0;
      }

      if (hasRecentLogoRotation || motion.isLogoMode) {
        motion.isIdleLogoMode = false;
        motion.isReturningToInitialMode = false;
        motion.returnVelocity = 0;

        const targetXVelocity = 0;
        const targetYVelocity = hasRecentLogoRotation
          ? motion.logoTargetYVelocity
          : 0;

        motion.xVelocity = moveToward(
          motion.xVelocity,
          targetXVelocity,
          LogoVelocityDeceleration * delta
        );

        motion.yVelocity = moveToward(
          motion.yVelocity,
          targetYVelocity,
          LogoVelocityDeceleration * delta
        );

        const shouldRotate =
          Math.abs(motion.xVelocity) > MinAngularVelocity ||
          Math.abs(motion.yVelocity) > MinAngularVelocity;

        if (shouldRotate) {
          applyScreenRotationByAngles(
            motion.yVelocity * delta,
            motion.xVelocity * delta
          );
        }

        if (!hasRecentLogoRotation && !shouldRotate) {
          motion.isLogoMode = false;
          motion.xVelocity = 0;
          motion.yVelocity = 0;
          motion.logoTargetYVelocity = 0;
        }

        return;
      }

      if (motion.isMouseInertiaMode) {
        motion.isIdleLogoMode = false;
        motion.isReturningToInitialMode = false;
        motion.returnVelocity = 0;

        motion.xVelocity = moveToward(
          motion.xVelocity,
          0,
          MouseInertiaDeceleration * delta
        );

        motion.yVelocity = moveToward(
          motion.yVelocity,
          0,
          MouseInertiaDeceleration * delta
        );

        const shouldRotate =
          Math.abs(motion.xVelocity) > MinAngularVelocity ||
          Math.abs(motion.yVelocity) > MinAngularVelocity;

        if (shouldRotate) {
          applyScreenRotationByAngles(
            motion.yVelocity * delta,
            motion.xVelocity * delta
          );
        } else {
          motion.isMouseInertiaMode = false;
          motion.xVelocity = 0;
          motion.yVelocity = 0;
        }

        return;
      }

      if (motion.isReturningToInitialMode) {
        const isInitialRotationReached = returnRotationMatrixToInitial(delta);

        if (isInitialRotationReached) {
          motion.isReturningToInitialMode = false;
          motion.isIdleLogoMode = true;
          motion.xVelocity = 0;
          motion.yVelocity = 0;
          motion.returnVelocity = 0;
        }

        return;
      }

      if (motion.isIdleLogoMode) {
        motion.xVelocity = moveToward(
          motion.xVelocity,
          0,
          IdleLogoAcceleration * delta
        );

        motion.yVelocity = moveToward(
          motion.yVelocity,
          IdleLogoYVelocity,
          IdleLogoAcceleration * delta
        );

        applyScreenRotationByAngles(
          motion.yVelocity * delta,
          motion.xVelocity * delta
        );

        return;
      }

      motion.xVelocity = damp(
        motion.xVelocity,
        MouseVelocityMemoryDamping,
        delta
      );

      motion.yVelocity = damp(
        motion.yVelocity,
        MouseVelocityMemoryDamping,
        delta
      );
    }

    function calculateX(i, j, k) {
      return (
        rotationMatrix[0][0] * i +
        rotationMatrix[0][1] * j +
        rotationMatrix[0][2] * k
      );
    }

    function calculateY(i, j, k) {
      return (
        rotationMatrix[1][0] * i +
        rotationMatrix[1][1] * j +
        rotationMatrix[1][2] * k
      );
    }

    function calculateZ(i, j, k) {
      return (
        rotationMatrix[2][0] * i +
        rotationMatrix[2][1] * j +
        rotationMatrix[2][2] * k
      );
    }

    function putSurfacePoint(
      cubeX,
      cubeY,
      cubeZ,
      ch,
      horizontalOffset,
      projectionPower
    ) {
      const x = calculateX(cubeX, cubeY, cubeZ);
      const y = calculateY(cubeX, cubeY, cubeZ);
      const z = calculateZ(cubeX, cubeY, cubeZ) + distanceFromCam;

      const ooz = 1 / z;

      const xp = Math.round(
        columns / 2 +
        horizontalOffset +
        projectionPower * ooz * x * getCharAspectRatio()
      );

      const yp = Math.round(
        rows / 2 +
        projectionPower * ooz * y
      );

      if (xp < 0 || xp >= columns || yp < 0 || yp >= rows) {
        return;
      }

      const index = xp + yp * columns;

      if (ooz > zBuffer[index]) {
        zBuffer[index] = ooz;
        buffer[index] = ch;
      }
    }

    function drawCube(cubeWidth, horizontalOffset, projectionPower) {
      for (let cubeX = -cubeWidth; cubeX <= cubeWidth; cubeX += incrementSpeed) {
        for (
          let cubeY = -cubeWidth;
          cubeY <= cubeWidth;
          cubeY += incrementSpeed
        ) {
          putSurfacePoint(
            cubeX,
            cubeY,
            -cubeWidth,
            '@',
            horizontalOffset,
            projectionPower
          );

          putSurfacePoint(
            cubeWidth,
            cubeY,
            cubeX,
            '$',
            horizontalOffset,
            projectionPower
          );

          putSurfacePoint(
            -cubeWidth,
            cubeY,
            -cubeX,
            '~',
            horizontalOffset,
            projectionPower
          );

          putSurfacePoint(
            -cubeX,
            cubeY,
            cubeWidth,
            '#',
            horizontalOffset,
            projectionPower
          );

          putSurfacePoint(
            cubeX,
            -cubeWidth,
            -cubeY,
            ';',
            horizontalOffset,
            projectionPower
          );

          putSurfacePoint(
            cubeX,
            cubeWidth,
            cubeY,
            '+',
            horizontalOffset,
            projectionPower
          );
        }
      }
    }

    function clearAsciiBuffers() {
      const size = columns * rows;

      if (buffer.length !== size) {
        buffer = new Array(size);
      }

      buffer.fill(backgroundChar);

      if (zBuffer.length !== size) {
        zBuffer = new Float32Array(size);
      } else {
        zBuffer.fill(0);
      }
    }

    function drawAsciiBuffer() {
      ctx.clearRect(0, 0, width, height);

      ctx.save();

      ctx.textBaseline = 'top';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.86)';

      const asciiWidth = columns * charWidth;
      const asciiHeight = rows * charHeight;

      const offsetX = Math.round((width - asciiWidth) / 2);
      const offsetY = Math.round((height - asciiHeight) / 2);

      for (let row = 0; row < rows; row++) {
        const rowOffset = row * columns;
        const y = offsetY + row * charHeight;

        for (let column = 0; column < columns; column++) {
          const ch = buffer[rowOffset + column];

          if (ch === backgroundChar) {
            continue;
          }

          ctx.fillText(
            ch,
            offsetX + column * charWidth,
            y
          );
        }
      }

      ctx.restore();
    }

    function getProjectionPower() {
      return Math.min(columns, rows) * ProjectionScale;
    }

    function drawFrame(time) {
      if (document.hidden) {
        animationFrameId = null;
        lastFrameTime = null;
        return;
      }

      if (lastFrameTime === null) {
        lastFrameTime = time;
      }

      const elapsed = time - lastFrameTime;

      if (elapsed >= FrameDuration - FrameTolerance) {
        const delta = Math.min(elapsed / 1000, MaxDelta);
        lastFrameTime = time - (elapsed % FrameDuration);

        updateCubeMotion(delta);

        clearAsciiBuffers();

        drawCube(FixedCubeWidth, 0, getProjectionPower());

        drawAsciiBuffer();
      }

      animationFrameId = requestAnimationFrame(drawFrame);
    }

    function startAnimation() {
      if (animationFrameId !== null || document.hidden) {
        return;
      }

      lastFrameTime = null;
      animationFrameId = requestAnimationFrame(drawFrame);
    }

    function stopAnimation() {
      if (animationFrameId === null) {
        return;
      }

      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
      lastFrameTime = null;
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        stopAnimation();
        resetMouseTracking();
        return;
      }

      motion.lastActivityTime = performance.now();
      startAnimation();
    }

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();

      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      pixelRatio = Math.min(window.devicePixelRatio || 1, 3);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx.imageSmoothingEnabled = false;

      applyFontSettings();

      columns = Math.min(FixedColumns, Math.max(1, Math.floor(width / charWidth)));
      rows = Math.min(FixedRows, Math.max(1, Math.floor(height / charHeight)));

      clearAsciiBuffers();
    }

    function handleMouseMove(event) {
      rememberMouseClientPosition(event.clientX, event.clientY);

      const { currentX, currentY, isInside } = getMouseCanvasPosition(
        event.clientX,
        event.clientY
      );

      const now = performance.now();

      markActivity(now);

      if (!isInside) {
        startMouseInertia();
        resetMouseTracking();
        return;
      }

      if (shouldStopMouseTracking(event.target)) {
        if (mouse.hasLastPosition) {
          const deltaTime = Math.max((now - mouse.lastTime) / 1000, 0.001);

          rememberMouseVelocity(
            currentX - mouse.lastX,
            currentY - mouse.lastY,
            deltaTime
          );
        }

        startMouseInertia();
        resetMouseTracking();
        return;
      }

      motion.isMouseInertiaMode = false;

      if (!mouse.isInside || !mouse.hasLastPosition) {
        mouse.isInside = true;
        mouse.lastX = currentX;
        mouse.lastY = currentY;
        mouse.lastTime = now;
        mouse.hasLastPosition = true;
        return;
      }

      const deltaX = currentX - mouse.lastX;
      const deltaY = currentY - mouse.lastY;
      const deltaTime = Math.max((now - mouse.lastTime) / 1000, 0.001);

      applyScreenRotation(deltaX, deltaY);
      rememberMouseVelocity(deltaX, deltaY, deltaTime);

      motion.isLogoMode = false;

      mouse.lastX = currentX;
      mouse.lastY = currentY;
      mouse.lastTime = now;
    }

    function handleWheel(event) {
      rememberMouseClientPosition(event.clientX, event.clientY);
    }

    function handleScroll() {
      if (!mouse.hasClientPosition || document.hidden) {
        return;
      }

      const now = performance.now();

      const { currentX, currentY, isInside } = getMouseCanvasPosition(
        mouse.clientX,
        mouse.clientY
      );

      markActivity(now);

      if (!isInside) {
        startMouseInertia();
        resetMouseTracking();
        return;
      }

      const elementUnderMouse = document.elementFromPoint(
        mouse.clientX,
        mouse.clientY
      );

      if (shouldStopMouseTracking(elementUnderMouse)) {
        startMouseInertia();
        resetMouseTracking();
        return;
      }

      motion.isMouseInertiaMode = false;

      if (!mouse.isInside || !mouse.hasLastPosition) {
        mouse.isInside = true;
        mouse.lastX = currentX;
        mouse.lastY = currentY;
        mouse.lastTime = now;
        mouse.hasLastPosition = true;
        return;
      }

      const deltaX = currentX - mouse.lastX;
      const deltaY = currentY - mouse.lastY;
      const deltaTime = Math.max((now - mouse.lastTime) / 1000, 0.001);

      if (deltaX === 0 && deltaY === 0) {
        return;
      }

      applyScreenRotation(deltaX, deltaY);
      rememberMouseVelocity(deltaX, deltaY, deltaTime);

      motion.isLogoMode = false;

      mouse.lastX = currentX;
      mouse.lastY = currentY;
      mouse.lastTime = now;
    }

    function handleMouseOut(event) {
      if (!event.relatedTarget) {
        markActivity();

        startMouseInertia();
        resetMouseTracking();
      }
    }

    function handleLogoRotationStep(event) {
      const deltaAngle = event.detail?.deltaAngle;

      if (typeof deltaAngle !== 'number') {
        return;
      }

      const now = performance.now();

      markActivity(now);

      const deltaTime = motion.lastLogoEventTime > 0
        ? Math.max((now - motion.lastLogoEventTime) / 1000, 0.001)
        : 1 / 60;

      const angle =
        ((deltaAngle * Math.PI) / 180) * 0.25;

      motion.logoTargetYVelocity = angle / deltaTime;
      motion.lastLogoEventTime = now;
      motion.isLogoMode = true;
    }

    resizeCanvas();
    startAnimation();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener(LogoRotationEventName, handleLogoRotationStep);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    window.visualViewport?.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener(LogoRotationEventName, handleLogoRotationStep);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      window.visualViewport?.removeEventListener('resize', resizeCanvas);

      stopAnimation();
    };
  }, [canvasRef]);
}