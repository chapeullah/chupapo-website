import {
  IdleLogoAcceleration,
  IdleLogoYVelocity,
  IdleRotationAxis,
  IdleStartDelay,
  LogoRotationEventTimeout,
  LogoRotationSpeedMultiplier,
  LogoVelocityDeceleration,
  MaxInheritedAngularVelocity,
  MinAngularVelocity,
  MouseInertiaDeceleration,
  MouseVelocityMemoryDamping,
  ReturnAcceleration,
  ReturnDeceleration,
  ReturnMaxSpeed,
  ReturnToInitialEpsilon,
} from "./cube-constants.js";

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
} from "./cube-math.js";

const RotationSensitivity = 0.004;

export function createCubeMotion() {
  const state = {
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

  let rotationMatrix = cloneMatrix(initialRotationMatrix);

  function applyScreenRotationByAngles(yaw, pitch) {
    const screenYRotation = createScreenYRotation(yaw);
    const screenXRotation = createScreenXRotation(pitch);
    const screenRotation = multiplyMatrices(screenYRotation, screenXRotation);

    rotationMatrix = multiplyMatrices(screenRotation, rotationMatrix);
    rotationMatrix = orthonormalizeMatrix(rotationMatrix);
  }

  function getReturnRotationToInitial() {
    const currentInverse = transposeMatrix(rotationMatrix);
    const returnRotation = multiplyMatrices(initialRotationMatrix, currentInverse);

    let angle = getRotationAngle(returnRotation);
    let axis = getRotationAxis(returnRotation, angle);
    const idleDirection = IdleLogoYVelocity >= 0 ? 1 : -1;

    if (dot(axis, IdleRotationAxis) * idleDirection < 0) {
      axis = [-axis[0], -axis[1], -axis[2]];
      angle = Math.PI * 2 - angle;
    }

    return { angle, axis };
  }

  function returnToInitial(delta) {
    const { angle, axis } = getReturnRotationToInitial();

    if (angle <= ReturnToInitialEpsilon) {
      rotationMatrix = cloneMatrix(initialRotationMatrix);
      state.returnVelocity = 0;
      return true;
    }

    const brakingDistance =
      (state.returnVelocity * state.returnVelocity) / (2 * ReturnDeceleration);

    if (brakingDistance >= angle) {
      state.returnVelocity = Math.max(
        0,
        state.returnVelocity - ReturnDeceleration * delta
      );
    } else {
      state.returnVelocity = Math.min(
        ReturnMaxSpeed,
        state.returnVelocity + ReturnAcceleration * delta
      );
    }

    const step = Math.min(state.returnVelocity * delta, angle);
    const returnStepRotation = createAxisAngleRotation(axis, step);

    rotationMatrix = multiplyMatrices(returnStepRotation, rotationMatrix);
    rotationMatrix = orthonormalizeMatrix(rotationMatrix);

    return false;
  }

  function markActivity(now = performance.now()) {
    state.lastActivityTime = now;

    if (state.isIdleLogoMode || state.isReturningToInitialMode) {
      state.isIdleLogoMode = false;
      state.isReturningToInitialMode = false;
      state.xVelocity = 0;
      state.yVelocity = 0;
      state.returnVelocity = 0;
    }
  }

  function beginPointerTracking() {
    state.isMouseInertiaMode = false;
  }

  function rememberPointerVelocity(deltaX, deltaY, deltaTime) {
    const zoomFactor = window.devicePixelRatio || 1;
    const normalizedDeltaX = deltaX * zoomFactor;
    const normalizedDeltaY = deltaY * zoomFactor;

    const yawVelocity =
      (-normalizedDeltaX * RotationSensitivity) / deltaTime;
    const pitchVelocity =
      (normalizedDeltaY * RotationSensitivity) / deltaTime;

    state.yVelocity = clamp(
      yawVelocity,
      -MaxInheritedAngularVelocity,
      MaxInheritedAngularVelocity
    );

    state.xVelocity = clamp(
      pitchVelocity,
      -MaxInheritedAngularVelocity,
      MaxInheritedAngularVelocity
    );
  }

  function applyPointerMovement(deltaX, deltaY, deltaTime) {
    const zoomFactor = window.devicePixelRatio || 1;
    const normalizedDeltaX = deltaX * zoomFactor;
    const normalizedDeltaY = deltaY * zoomFactor;

    applyScreenRotationByAngles(
      -normalizedDeltaX * RotationSensitivity,
      normalizedDeltaY * RotationSensitivity
    );

    rememberPointerVelocity(deltaX, deltaY, deltaTime);
    state.isMouseInertiaMode = false;
    state.isLogoMode = false;
  }

  function startPointerInertia() {
    state.isMouseInertiaMode =
      Math.abs(state.xVelocity) > MinAngularVelocity ||
      Math.abs(state.yVelocity) > MinAngularVelocity;
  }

  function applyLogoRotationStep(deltaAngle, now = performance.now()) {
    const deltaTime =
      state.lastLogoEventTime > 0
        ? Math.max((now - state.lastLogoEventTime) / 1000, 0.001)
        : 1 / 60;

    const angle =
      ((deltaAngle * Math.PI) / 180) * LogoRotationSpeedMultiplier;

    markActivity(now);
    state.logoTargetYVelocity = angle / deltaTime;
    state.lastLogoEventTime = now;
    state.isLogoMode = true;
  }

  function update(delta) {
    const now = performance.now();
    const hasRecentLogoRotation =
      state.lastLogoEventTime > 0 &&
      now - state.lastLogoEventTime <= LogoRotationEventTimeout;

    const shouldStartIdleReturn =
      !hasRecentLogoRotation &&
      !state.isLogoMode &&
      !state.isMouseInertiaMode &&
      !state.isIdleLogoMode &&
      !state.isReturningToInitialMode &&
      now - state.lastActivityTime >= IdleStartDelay;

    if (shouldStartIdleReturn) {
      state.isReturningToInitialMode = true;
      state.xVelocity = 0;
      state.yVelocity = 0;
      state.logoTargetYVelocity = 0;
      state.returnVelocity = 0;
    }

    if (hasRecentLogoRotation || state.isLogoMode) {
      state.isIdleLogoMode = false;
      state.isReturningToInitialMode = false;
      state.returnVelocity = 0;

      const targetYVelocity = hasRecentLogoRotation
        ? state.logoTargetYVelocity
        : 0;

      state.xVelocity = moveToward(
        state.xVelocity,
        0,
        LogoVelocityDeceleration * delta
      );

      state.yVelocity = moveToward(
        state.yVelocity,
        targetYVelocity,
        LogoVelocityDeceleration * delta
      );

      const shouldRotate =
        Math.abs(state.xVelocity) > MinAngularVelocity ||
        Math.abs(state.yVelocity) > MinAngularVelocity;

      if (shouldRotate) {
        applyScreenRotationByAngles(
          state.yVelocity * delta,
          state.xVelocity * delta
        );
      }

      if (!hasRecentLogoRotation && !shouldRotate) {
        state.isLogoMode = false;
        state.xVelocity = 0;
        state.yVelocity = 0;
        state.logoTargetYVelocity = 0;
      }

      return;
    }

    if (state.isMouseInertiaMode) {
      state.isIdleLogoMode = false;
      state.isReturningToInitialMode = false;
      state.returnVelocity = 0;

      state.xVelocity = moveToward(
        state.xVelocity,
        0,
        MouseInertiaDeceleration * delta
      );

      state.yVelocity = moveToward(
        state.yVelocity,
        0,
        MouseInertiaDeceleration * delta
      );

      const shouldRotate =
        Math.abs(state.xVelocity) > MinAngularVelocity ||
        Math.abs(state.yVelocity) > MinAngularVelocity;

      if (shouldRotate) {
        applyScreenRotationByAngles(
          state.yVelocity * delta,
          state.xVelocity * delta
        );
      } else {
        state.isMouseInertiaMode = false;
        state.xVelocity = 0;
        state.yVelocity = 0;
      }

      return;
    }

    if (state.isReturningToInitialMode) {
      if (returnToInitial(delta)) {
        state.isReturningToInitialMode = false;
        state.isIdleLogoMode = true;
        state.xVelocity = 0;
        state.yVelocity = 0;
        state.returnVelocity = 0;
      }

      return;
    }

    if (state.isIdleLogoMode) {
      state.xVelocity = moveToward(
        state.xVelocity,
        0,
        IdleLogoAcceleration * delta
      );

      state.yVelocity = moveToward(
        state.yVelocity,
        IdleLogoYVelocity,
        IdleLogoAcceleration * delta
      );

      applyScreenRotationByAngles(
        state.yVelocity * delta,
        state.xVelocity * delta
      );

      return;
    }

    state.xVelocity = damp(
      state.xVelocity,
      MouseVelocityMemoryDamping,
      delta
    );

    state.yVelocity = damp(
      state.yVelocity,
      MouseVelocityMemoryDamping,
      delta
    );
  }

  return {
    applyLogoRotationStep,
    applyPointerMovement,
    beginPointerTracking,
    getRotationMatrix: () => rotationMatrix,
    markActivity,
    rememberPointerVelocity,
    startPointerInertia,
    update,
  };
}
