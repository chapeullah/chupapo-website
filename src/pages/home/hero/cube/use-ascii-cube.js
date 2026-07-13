import { useEffect } from "react";

import {
  CubeScreenshotMode,
  FrameDuration,
  FrameTolerance,
  MaxDelta,
} from "./cube-constants.js";
import { createAsciiRenderer } from "./ascii-renderer.js";
import { bindCubeInput } from "./cube-input.js";
import { createCubeMotion } from "./cube-motion.js";

const ReducedMotionQuery = "(prefers-reduced-motion: reduce)";

export function useAsciiCube(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    const renderer = createAsciiRenderer(canvas, context);
    const motion = createCubeMotion();
    const reducedMotionMedia = window.matchMedia(ReducedMotionQuery);

    let animationFrameId = null;
    let lastFrameTime = null;
    let isIntersecting = true;
    let isReducedMotion = reducedMotionMedia.matches;

    const canAnimate = () =>
      !document.hidden && isIntersecting && !isReducedMotion;

    const canInteract = () => !document.hidden && isIntersecting;

    function drawStaticFrame() {
      renderer.draw(motion.getRotationMatrix());
    }

    function stopAnimation() {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = null;
      lastFrameTime = null;
    }

    function drawFrame(time) {
      if (!canAnimate()) {
        stopAnimation();
        return;
      }

      if (lastFrameTime === null) {
        lastFrameTime = time;
      }

      const elapsed = time - lastFrameTime;

      if (elapsed >= FrameDuration - FrameTolerance) {
        const delta = Math.min(elapsed / 1000, MaxDelta);
        lastFrameTime = time - (elapsed % FrameDuration);

        motion.update(delta);
        renderer.draw(motion.getRotationMatrix());
      }

      animationFrameId = requestAnimationFrame(drawFrame);
    }

    function startAnimation() {
      if (animationFrameId !== null || !canAnimate()) {
        return;
      }

      lastFrameTime = null;
      animationFrameId = requestAnimationFrame(drawFrame);
    }

    function syncAnimation() {
      if (canAnimate()) {
        startAnimation();
      } else {
        stopAnimation();
      }
    }

    function resizeCanvas() {
      renderer.resize();

      if (animationFrameId === null) {
        drawStaticFrame();
      }
    }

    renderer.resize();
    drawStaticFrame();

    if (CubeScreenshotMode) {
      const frameId = requestAnimationFrame(resizeCanvas);

      window.addEventListener("resize", resizeCanvas);

      return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener("resize", resizeCanvas);
        stopAnimation();
      };
    }

    const input = bindCubeInput({
      canvas,
      motion,
      isEnabled: canInteract,
      onMotionChange: () => {
        if (animationFrameId === null && isIntersecting) {
          drawStaticFrame();
        }
      },
    });

    function handleVisibilityChange() {
      if (document.hidden) {
        input.reset();
      } else {
        motion.markActivity();
      }

      syncAnimation();
    }

    function handleReducedMotionChange(event) {
      isReducedMotion = event.matches;

      if (isReducedMotion) {
        input.reset();
      }

      syncAnimation();

      if (isReducedMotion && isIntersecting) {
        drawStaticFrame();
      }
    }

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;

      if (!isIntersecting) {
        input.reset();
      }

      syncAnimation();

      if (isIntersecting && isReducedMotion) {
        drawStaticFrame();
      }
    });

    const themeObserver = new MutationObserver(() => {
      renderer.refreshStyle();

      if (animationFrameId === null && isIntersecting) {
        drawStaticFrame();
      }
    });

    intersectionObserver.observe(canvas);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("resize", resizeCanvas);
    window.visualViewport?.addEventListener("resize", resizeCanvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotionMedia.addEventListener("change", handleReducedMotionChange);

    startAnimation();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.visualViewport?.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotionMedia.removeEventListener("change", handleReducedMotionChange);

      intersectionObserver.disconnect();
      themeObserver.disconnect();
      input.unbind();
      stopAnimation();
    };
  }, [canvasRef]);
}
