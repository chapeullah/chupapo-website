import {
  BaseFontSize,
  FixedColumns,
  FixedCubeWidth,
  FixedRows,
  ProjectionScale,
} from "./cube-constants.js";

const BackgroundChar = ".";
const DistanceFromCamera = 100;
const SurfaceIncrement = 0.6;
const MaxPixelRatio = 3;

export function createAsciiRenderer(canvas, context) {
  let width = 0;
  let height = 0;
  let columns = FixedColumns;
  let rows = FixedRows;
  let charWidth = 8;
  let charHeight = 13;
  let textColor = "currentColor";

  let buffer = [];
  let zBuffer = new Float32Array(0);

  function applyFontSettings() {
    context.font = `${BaseFontSize}px "Courier New", monospace`;
    charWidth = Math.ceil(context.measureText("M").width);
    charHeight = Math.ceil(BaseFontSize * 1.25);
  }

  function refreshStyle() {
    textColor = getComputedStyle(canvas).color;
  }

  function clearBuffers() {
    const size = columns * rows;

    if (buffer.length !== size) {
      buffer = new Array(size);
    }

    buffer.fill(BackgroundChar);

    if (zBuffer.length !== size) {
      zBuffer = new Float32Array(size);
    } else {
      zBuffer.fill(0);
    }
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, MaxPixelRatio);

    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));

    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);

    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.imageSmoothingEnabled = false;

    applyFontSettings();
    refreshStyle();

    columns = Math.min(FixedColumns, Math.max(1, Math.floor(width / charWidth)));
    rows = Math.min(FixedRows, Math.max(1, Math.floor(height / charHeight)));

    clearBuffers();
  }

  function putSurfacePoint(
    rotationMatrix,
    cubeX,
    cubeY,
    cubeZ,
    character,
    horizontalOffset,
    projectionPower
  ) {
    const x =
      rotationMatrix[0][0] * cubeX +
      rotationMatrix[0][1] * cubeY +
      rotationMatrix[0][2] * cubeZ;

    const y =
      rotationMatrix[1][0] * cubeX +
      rotationMatrix[1][1] * cubeY +
      rotationMatrix[1][2] * cubeZ;

    const z =
      rotationMatrix[2][0] * cubeX +
      rotationMatrix[2][1] * cubeY +
      rotationMatrix[2][2] * cubeZ +
      DistanceFromCamera;

    const inverseZ = 1 / z;
    const charAspectRatio = charWidth === 0 ? 1 : charHeight / charWidth;

    const projectedX = Math.round(
      columns / 2 +
        horizontalOffset +
        projectionPower * inverseZ * x * charAspectRatio
    );

    const projectedY = Math.round(
      rows / 2 + projectionPower * inverseZ * y
    );

    if (
      projectedX < 0 ||
      projectedX >= columns ||
      projectedY < 0 ||
      projectedY >= rows
    ) {
      return;
    }

    const index = projectedX + projectedY * columns;

    if (inverseZ > zBuffer[index]) {
      zBuffer[index] = inverseZ;
      buffer[index] = character;
    }
  }

  function drawCube(rotationMatrix, projectionPower) {
    for (
      let cubeX = -FixedCubeWidth;
      cubeX <= FixedCubeWidth;
      cubeX += SurfaceIncrement
    ) {
      for (
        let cubeY = -FixedCubeWidth;
        cubeY <= FixedCubeWidth;
        cubeY += SurfaceIncrement
      ) {
        putSurfacePoint(
          rotationMatrix,
          cubeX,
          cubeY,
          -FixedCubeWidth,
          "@",
          0,
          projectionPower
        );

        putSurfacePoint(
          rotationMatrix,
          FixedCubeWidth,
          cubeY,
          cubeX,
          "$",
          0,
          projectionPower
        );

        putSurfacePoint(
          rotationMatrix,
          -FixedCubeWidth,
          cubeY,
          -cubeX,
          "~",
          0,
          projectionPower
        );

        putSurfacePoint(
          rotationMatrix,
          -cubeX,
          cubeY,
          FixedCubeWidth,
          "#",
          0,
          projectionPower
        );

        putSurfacePoint(
          rotationMatrix,
          cubeX,
          -FixedCubeWidth,
          -cubeY,
          ";",
          0,
          projectionPower
        );

        putSurfacePoint(
          rotationMatrix,
          cubeX,
          FixedCubeWidth,
          cubeY,
          "+",
          0,
          projectionPower
        );
      }
    }
  }

  function drawBuffer() {
    context.clearRect(0, 0, width, height);
    context.save();

    context.textBaseline = "top";
    context.fillStyle = textColor;

    const asciiWidth = columns * charWidth;
    const asciiHeight = rows * charHeight;
    const offsetX = Math.round((width - asciiWidth) / 2);
    const offsetY = Math.round((height - asciiHeight) / 2);

    for (let row = 0; row < rows; row++) {
      const rowOffset = row * columns;
      const y = offsetY + row * charHeight;

      for (let column = 0; column < columns; column++) {
        const character = buffer[rowOffset + column];

        if (character === BackgroundChar) {
          continue;
        }

        context.fillText(character, offsetX + column * charWidth, y);
      }
    }

    context.restore();
  }

  function draw(rotationMatrix) {
    clearBuffers();
    drawCube(rotationMatrix, Math.min(columns, rows) * ProjectionScale);
    drawBuffer();
  }

  return {
    draw,
    refreshStyle,
    resize,
  };
}
