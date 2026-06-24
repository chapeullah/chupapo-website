export const Sqrt2 = Math.sqrt(2);
export const Sqrt3 = Math.sqrt(3);
export const Sqrt6 = Math.sqrt(6);

export const initialRotationMatrix = [
  [1 / Sqrt2, 0, -1 / Sqrt2],
  [-1 / Sqrt3, 1 / Sqrt3, -1 / Sqrt3],
  [1 / Sqrt6, 2 / Sqrt6, 1 / Sqrt6],
];

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function moveToward(current, target, maxDelta) {
  if (Math.abs(target - current) <= maxDelta) {
    return target;
  }

  return current + Math.sign(target - current) * maxDelta;
}

export function damp(value, damping, delta) {
  return value * Math.exp(-damping * delta);
}

export function multiplyMatrices(a, b) {
  return [
    [
      a[0][0] * b[0][0] + a[0][1] * b[1][0] + a[0][2] * b[2][0],
      a[0][0] * b[0][1] + a[0][1] * b[1][1] + a[0][2] * b[2][1],
      a[0][0] * b[0][2] + a[0][1] * b[1][2] + a[0][2] * b[2][2],
    ],
    [
      a[1][0] * b[0][0] + a[1][1] * b[1][0] + a[1][2] * b[2][0],
      a[1][0] * b[0][1] + a[1][1] * b[1][1] + a[1][2] * b[2][1],
      a[1][0] * b[0][2] + a[1][1] * b[1][2] + a[1][2] * b[2][2],
    ],
    [
      a[2][0] * b[0][0] + a[2][1] * b[1][0] + a[2][2] * b[2][0],
      a[2][0] * b[0][1] + a[2][1] * b[1][1] + a[2][2] * b[2][1],
      a[2][0] * b[0][2] + a[2][1] * b[1][2] + a[2][2] * b[2][2],
    ],
  ];
}

export function transposeMatrix(matrix) {
  return [
    [matrix[0][0], matrix[1][0], matrix[2][0]],
    [matrix[0][1], matrix[1][1], matrix[2][1]],
    [matrix[0][2], matrix[1][2], matrix[2][2]],
  ];
}

export function createScreenXRotation(angle) {
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);

  return [
    [1, 0, 0],
    [0, cos, -sin],
    [0, sin, cos],
  ];
}

export function createScreenYRotation(angle) {
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);

  return [
    [cos, 0, sin],
    [0, 1, 0],
    [-sin, 0, cos],
  ];
}

export function createAxisAngleRotation(axis, angle) {
  const [x, y, z] = axis;

  const sin = Math.sin(angle);
  const cos = Math.cos(angle);
  const t = 1 - cos;

  return [
    [
      t * x * x + cos,
      t * x * y - sin * z,
      t * x * z + sin * y,
    ],
    [
      t * x * y + sin * z,
      t * y * y + cos,
      t * y * z - sin * x,
    ],
    [
      t * x * z - sin * y,
      t * y * z + sin * x,
      t * z * z + cos,
    ],
  ];
}

export function normalizeVector(vector) {
  const length = Math.hypot(vector[0], vector[1], vector[2]);

  if (length === 0) {
    return vector;
  }

  return [
    vector[0] / length,
    vector[1] / length,
    vector[2] / length,
  ];
}

export function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

export function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

export function orthonormalizeMatrix(matrix) {
  const x = normalizeVector(matrix[0]);

  const yProjection = dot(matrix[1], x);

  const y = normalizeVector([
    matrix[1][0] - yProjection * x[0],
    matrix[1][1] - yProjection * x[1],
    matrix[1][2] - yProjection * x[2],
  ]);

  const z = cross(x, y);

  return [x, y, z];
}

export function cloneMatrix(matrix) {
  return matrix.map((row) => [...row]);
}

export function getRotationAngle(matrix) {
  const trace = matrix[0][0] + matrix[1][1] + matrix[2][2];

  return Math.acos(clamp((trace - 1) / 2, -1, 1));
}

export function getRotationAxis(matrix, angle) {
  const sin = Math.sin(angle);

  if (Math.abs(sin) < 0.0001) {
    return [0, 1, 0];
  }

  return normalizeVector([
    (matrix[2][1] - matrix[1][2]) / (2 * sin),
    (matrix[0][2] - matrix[2][0]) / (2 * sin),
    (matrix[1][0] - matrix[0][1]) / (2 * sin),
  ]);
}