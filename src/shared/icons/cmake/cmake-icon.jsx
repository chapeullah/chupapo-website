export default function CmakeIcon({ className = "" }) {
  return (
    <svg
      className={`icon cmake-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 22 12.222 2 2 22h20Zm-8.878-9.333-4.637 3.886L2 22m11.625-3.376c-.19-2.249-.351-4.156-.503-5.957-.287-3.4-.542-6.424-.9-10.667M8.485 16.553l5.14 2.071L22 22" />
    </svg>
  );
}