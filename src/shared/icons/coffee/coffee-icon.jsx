export default function CoffeeIcon({ className = "" }) {
  return (
    <svg
      className={`icon coffee-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18.32 14.78C18.58 13.31 18.67 12 18.67 12H2s.22 3.58 1.11 5.56C4 19.53 6.44 22 6.44 22h7.78s.98-.99 1.93-2.22c.55-.71 1.08-1.5 1.4-2.22.36-.79.6-1.82.77-2.78ZM16.15 19.78s3.55.15 4.74-1.11C22.08 17.4 22 14.78 22 14.78h-3.68M8.67 8.67 7.56 6.44l1.11-2.22L7.56 2M13.11 8.67 12 6.44l1.11-2.22" />
    </svg>
  );
}