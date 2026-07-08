import './go-back-button.css';

import './variants/default.css';
import './variants/ghost.css';

export default function GoHomeButton({
  to = '/',
  className = '',
  variant = 'default',
  type = 'button',
  ...props
}) {
  const buttonClassName = `go-home-button go-home-button--${variant} ${className}`.trim();
  return (
    <button
      type={type}
      className={buttonClassName}
      {...props}
    >

    </button>
  );
}