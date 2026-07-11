export default function LifeBuoyIcon({ className = '' }) {
  return (
    <svg
      className={`icon life-buoy-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />

      <path d="M15 9L19 5" />
      <path d="M5 19L9 15" />
      <path d="M9 9L5 5" />
      <path d="M19 19L15 15" />
    </svg>
  );
}