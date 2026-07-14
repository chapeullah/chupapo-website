import { useRef } from "react";

import { useAsciiCube } from "./use-ascii-cube.js";
import { CubeScreenshotMode } from "./cube-constants.js";

import "./cube.css";

export default function Cube() {
  const canvasRef = useRef(null);

  useAsciiCube(canvasRef);

  return (
    <canvas
      className={`cube ${CubeScreenshotMode ? "cube--screenshot" : ""}`}
      ref={canvasRef}
    />
  );
}
