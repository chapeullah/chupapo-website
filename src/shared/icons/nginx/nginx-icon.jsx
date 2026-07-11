export default function NginxIcon({ className = "" }) {
  return (
    <svg
      className={`icon nginx-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 16V8L16 16V8M12 22L20.5 17V7L12 2L3.5 7V17L12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}