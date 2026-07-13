import {
  CubeMouseTrackingStopSelector,
  LogoRotationEventName,
} from "@lib/brand-motion/events.js";

export function bindCubeInput({
  canvas,
  motion,
  isEnabled,
  onMotionChange,
}) {
  const pointer = {
    isInside: false,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
    hasLastPosition: false,
    clientX: 0,
    clientY: 0,
    hasClientPosition: false,
  };

  function resetPointerTracking() {
    pointer.isInside = false;
    pointer.hasLastPosition = false;
    pointer.lastTime = 0;
  }

  function rememberClientPosition(clientX, clientY) {
    pointer.clientX = clientX;
    pointer.clientY = clientY;
    pointer.hasClientPosition = true;
  }

  function getTrackingRect() {
    const trackingArea = canvas.closest("[data-cube-tracking-area]");
    return (trackingArea ?? canvas).getBoundingClientRect();
  }

  function getPointerPosition(clientX, clientY) {
    const rect = getTrackingRect();
    const currentX = clientX - rect.left;
    const currentY = clientY - rect.top;

    return {
      currentX,
      currentY,
      isInside:
        currentX >= 0 &&
        currentX <= rect.width &&
        currentY >= 0 &&
        currentY <= rect.height,
    };
  }

  function shouldStopTracking(target) {
    return (
      target instanceof Element &&
      target.closest(CubeMouseTrackingStopSelector) !== null
    );
  }

  function leaveTrackingArea() {
    motion.startPointerInertia();
    resetPointerTracking();
  }

  function trackPointerMovement(currentX, currentY, now, ignoreStationary = false) {
    motion.beginPointerTracking();

    if (!pointer.isInside || !pointer.hasLastPosition) {
      pointer.isInside = true;
      pointer.lastX = currentX;
      pointer.lastY = currentY;
      pointer.lastTime = now;
      pointer.hasLastPosition = true;
      return;
    }

    const deltaX = currentX - pointer.lastX;
    const deltaY = currentY - pointer.lastY;
    const deltaTime = Math.max((now - pointer.lastTime) / 1000, 0.001);

    if (ignoreStationary && deltaX === 0 && deltaY === 0) {
      return;
    }

    motion.applyPointerMovement(deltaX, deltaY, deltaTime);
    onMotionChange();

    pointer.lastX = currentX;
    pointer.lastY = currentY;
    pointer.lastTime = now;
  }

  function handleMouseMove(event) {
    if (!isEnabled()) {
      return;
    }

    rememberClientPosition(event.clientX, event.clientY);

    const { currentX, currentY, isInside } = getPointerPosition(
      event.clientX,
      event.clientY
    );

    const now = performance.now();
    motion.markActivity(now);

    if (!isInside) {
      leaveTrackingArea();
      return;
    }

    if (shouldStopTracking(event.target)) {
      if (pointer.hasLastPosition) {
        const deltaTime = Math.max((now - pointer.lastTime) / 1000, 0.001);

        motion.rememberPointerVelocity(
          currentX - pointer.lastX,
          currentY - pointer.lastY,
          deltaTime
        );
      }

      leaveTrackingArea();
      return;
    }

    trackPointerMovement(currentX, currentY, now);
  }

  function handleWheel(event) {
    if (isEnabled()) {
      rememberClientPosition(event.clientX, event.clientY);
    }
  }

  function handleScroll() {
    if (!isEnabled() || !pointer.hasClientPosition) {
      return;
    }

    const now = performance.now();
    const { currentX, currentY, isInside } = getPointerPosition(
      pointer.clientX,
      pointer.clientY
    );

    motion.markActivity(now);

    if (!isInside) {
      leaveTrackingArea();
      return;
    }

    const elementUnderPointer = document.elementFromPoint(
      pointer.clientX,
      pointer.clientY
    );

    if (shouldStopTracking(elementUnderPointer)) {
      leaveTrackingArea();
      return;
    }

    trackPointerMovement(currentX, currentY, now, true);
  }

  function handleMouseOut(event) {
    if (isEnabled() && !event.relatedTarget) {
      motion.markActivity();
      leaveTrackingArea();
    }
  }

  function handleLogoRotationStep(event) {
    if (!isEnabled()) {
      return;
    }

    const deltaAngle = event.detail?.deltaAngle;

    if (typeof deltaAngle === "number") {
      motion.applyLogoRotationStep(deltaAngle);
      onMotionChange();
    }
  }

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("wheel", handleWheel, { passive: true });
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("mouseout", handleMouseOut);
  window.addEventListener(LogoRotationEventName, handleLogoRotationStep);

  return {
    reset: resetPointerTracking,
    unbind() {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener(LogoRotationEventName, handleLogoRotationStep);
    },
  };
}
