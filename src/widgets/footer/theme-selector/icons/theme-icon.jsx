export default function ThemeIcon({ className = '' }) {
  return (
    <svg
      className={`icon theme-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 666.67 666.67"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M333.33,666.67c184.09,0,333.33-149.24,333.33-333.33S517.43,0,333.33,0,0,149.24,0,333.33s149.24,333.33,333.33,333.33ZM333.33,566.67V100c137.29,4.46,232.54,91.25,233.33,233.33.81,144.24-96.71,231.86-233.33,233.33Z"
      />
    </svg>
  );
}