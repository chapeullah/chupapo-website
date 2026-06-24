export default function ReactLogo({ className = '' }) {
  return (
    <svg
      className={`logo react-logo ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11 -10.13 22 20.27"
      aria-hidden="true"
    >
      <circle
        r="2"
        fill="#087ea4"
      />

      <g
        fill="none"
        stroke="#087ea4"
      >
        <ellipse rx="10" ry="4.5" />
        <ellipse rx="10" ry="4.5" transform="rotate(60)" />
        <ellipse rx="10" ry="4.5" transform="rotate(120)" />
      </g>
    </svg>
  );
}