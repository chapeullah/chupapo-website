export const LogoRotationEventName = 'logo-rotation-step';
export const LogoRotationSpeedMultiplier = 0.25;

export const CubeMouseTrackingStopSelector = '[data-cube-stop-mouse-tracking]';

export const LogoRotationEventTimeout = 140;

export const MaxInheritedAngularVelocity = 14;
export const LogoVelocityDeceleration = 18;
export const MouseVelocityMemoryDamping = 10;
export const MouseInertiaDeceleration = 18;
export const MinAngularVelocity = 0.001;

export const IdleStartDelay = 20000;
export const LogoIdleSpeed = 180;

export const IdleLogoYVelocity =
  ((LogoIdleSpeed * Math.PI) / 180) * LogoRotationSpeedMultiplier;

export const IdleLogoAcceleration = (15 * Math.PI) / 180;

export const IdleRotationAxis = [0, 1, 0];

export const ReturnMaxSpeed = (60 * Math.PI) / 180;
export const ReturnAcceleration = (15 * Math.PI) / 180;
export const ReturnDeceleration = (15 * Math.PI) / 180;
export const ReturnToInitialEpsilon = 0.0005;

export const TargetFps = 60;
export const FrameDuration = 1000 / TargetFps;
export const FrameTolerance = 0.5;
export const MaxDelta = 0.032;

export const FixedColumns = 160;
export const FixedRows = 44;

export const FixedCubeWidth = 20;
export const ProjectionScale = 0.9;

export const BaseFontSize = 12;