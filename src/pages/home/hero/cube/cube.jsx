import { useRef } from "react";

import { useAsciiCube } from "./use-ascii-cube.js";

import "./cube.css";
import { CubeScreenshotMode } from "@pages/home/hero/cube/cube-constants.js";

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