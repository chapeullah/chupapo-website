export default function ArrowLeftIcon({ className = '' }) {
  return (
    <svg
      className={`icon arrow-left-icon ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12.31,21.55c-.59.58-1.53.58-2.12,0L1.7,13.06c-.58-.59-.58-1.53,0-2.12L10.19,2.44c.59-.55,1.51-.53,2.08.04.57.57.59,1.49.04,2.08l-5.94,5.94h14.87c.83,0,1.5.67,1.5,1.5s-.67,1.5-1.5,1.5H6.37l5.94,5.94c.58.59.58,1.53,0,2.12Z"
      />
    </svg>
  );
}