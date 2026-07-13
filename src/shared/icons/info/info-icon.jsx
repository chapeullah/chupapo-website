export default function InfoIcon({ className = "" }) {
  return (
    <svg
      className={`icon info-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10.5" />
      <line x1="12" y1="17.14" x2="12" y2="9.64" />
      <circle cx="12" cy="7.11" r=".25" />
    </svg>
  );
}