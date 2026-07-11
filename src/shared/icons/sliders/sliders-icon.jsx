export default function SlidersIcon({ className = "" }) {
  return (
    <svg
      className={`icon sliders-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 6s5.576 0 9 0M16 4v4M16 6h4" />
      <path d="M4 18s2.576 0 6 0M13 16v4M13 18h7" />
      <path d="M20 12s-5.576 0-9 0M8 14v-4M8 12H4" />
    </svg>
  );
}