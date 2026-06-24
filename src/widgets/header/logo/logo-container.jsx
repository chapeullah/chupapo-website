import { useEffect, useRef } from 'react';

import ChupapoLogo from '@logos/chupapo/chupapo-logo.jsx';

import './logo-container.css';

const MaxSpeed = 180;
const Acceleration = 90;
const Deceleration = 720;
const MinFinishSpeed = 90;
const HoverImpulseSpeed = 90;

const SymmetryAngle = 180;

const LogoRotationEventName = 'logo-rotation-step';

export default function LogoContainer() {
  const logoWrapperRef = useRef(null);

  const frameRef = useRef(null);
  const lastTimeRef = useRef(null);

  const angleRef = useRef(0);
  const speedRef = useRef(0);

  const isHoveringRef = useRef(false);
  const finishTargetRef = useRef(null);

  const getLogo = () => {
    return logoWrapperRef.current?.querySelector('.logo-container__logo');
  };

  const setLogoAngle = (angle) => {
    const logo = getLogo();

    if (!logo) {
      return;
    }

    logo.style.transform = `rotate(${angle}deg)`;
  };

  const emitLogoRotationStep = (deltaAngle) => {
    window.dispatchEvent(
      new CustomEvent(LogoRotationEventName, {
        detail: {
          deltaAngle,
        },
      })
    );
  };

  const stopAnimation = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = null;
    lastTimeRef.current = null;
  };

  const animate = (time) => {
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
    }

    const delta = Math.min((time - lastTimeRef.current) / 1000, 0.032);
    lastTimeRef.current = time;

    if (isHoveringRef.current) {
      finishTargetRef.current = null;

      if (speedRef.current < MaxSpeed) {
        speedRef.current = Math.min(
          MaxSpeed,
          speedRef.current + Acceleration * delta
        );
      } else {
        speedRef.current = Math.max(
          MaxSpeed,
          speedRef.current - Deceleration * delta
        );
      }

      const step = speedRef.current * delta;

      angleRef.current += step;
      setLogoAngle(angleRef.current);
      emitLogoRotationStep(step);

      frameRef.current = requestAnimationFrame(animate);
      return;
    }

    if (finishTargetRef.current === null) {
      const currentAngle = angleRef.current;
      const speed = Math.max(speedRef.current, MinFinishSpeed);

      const brakingDistance = (speed * speed) / (2 * Deceleration);

      const nextSymmetryTarget =
        Math.ceil((currentAngle + 1) / SymmetryAngle) * SymmetryAngle;

      const brakingTarget =
        Math.ceil((currentAngle + brakingDistance) / SymmetryAngle) *
        SymmetryAngle;

      finishTargetRef.current = Math.max(nextSymmetryTarget, brakingTarget);

      speedRef.current = speed;
    }

    const distance = finishTargetRef.current - angleRef.current;

    if (distance <= 0.5) {
      angleRef.current = 0;
      speedRef.current = 0;
      finishTargetRef.current = null;

      setLogoAngle(0);
      stopAnimation();
      return;
    }

    const brakingDistance =
      (speedRef.current * speedRef.current) / (2 * Deceleration);

    if (brakingDistance >= distance) {
      speedRef.current = Math.max(
        30,
        speedRef.current - Deceleration * delta
      );
    } else {
      speedRef.current = Math.min(
        MaxSpeed,
        speedRef.current + Acceleration * delta
      );
    }

    const step = Math.min(speedRef.current * delta, distance);

    angleRef.current += step;
    setLogoAngle(angleRef.current);
    emitLogoRotationStep(step);

    frameRef.current = requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    if (frameRef.current !== null) {
      return;
    }

    lastTimeRef.current = null;
    frameRef.current = requestAnimationFrame(animate);
  };

  const handleLogoEnter = () => {
    isHoveringRef.current = true;
    finishTargetRef.current = null;

    speedRef.current = Math.max(speedRef.current, HoverImpulseSpeed);

    startAnimation();
  };

  const handleLogoLeave = () => {
    isHoveringRef.current = false;

    speedRef.current = Math.max(speedRef.current, HoverImpulseSpeed);

    startAnimation();
  };

  useEffect(() => {
    return () => {
      stopAnimation();
    };
  }, []);

  return (
    <div className="logo-container">
      <a
        href="/"
        className="logo-container__link"
        data-cube-stop-mouse-tracking
        onMouseEnter={handleLogoEnter}
        onMouseLeave={handleLogoLeave}
      >
        <span ref={logoWrapperRef} className="logo-container__trigger">
          <ChupapoLogo className="logo-container__logo" />
        </span>

        <h1 className="logo-container__title">Chupapo</h1>
      </a>
    </div>
  );
}