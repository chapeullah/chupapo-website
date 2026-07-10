export default function ProfileCardIcon({ className = "" }) {
  return (
    <svg
      className={`icon profile-card-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1.17,5.98v12.04c0,1.33,1.08,2.41,2.41,2.41h16.85c1.33,0,2.41-1.08,2.41-2.41V5.98c0-1.33-1.08-2.41-2.41-2.41H3.58c-1.33,0-2.41,1.08-2.41,2.41Z" />
      <path d="M15.61,9.59h3.61" />
      <path d="M15.61,13.2h3.61" />
      <path d="M10.8,9.59c0,1.33-1.08,2.41-2.41,2.41s-2.41-1.08-2.41-2.41,1.08-2.41,2.41-2.41c.64,0,1.25.25,1.7.71.45.45.71,1.06.71,1.7Z" />
      <path d="M3.58,16.81c3.35-3.78,7.28-2.59,9.63,0" />
    </svg>
  );
}