import './button.css';
import './variants/default.css';
import './variants/accent.css';
import './variants/ghost.css';

import { NavLink } from 'react-router-dom';

export default function Button({
  to,
  href,
  className = '',
  children,
  variant = 'default',
  type = 'button',
  ...props
}) {
  const buttonClassName = `button button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={buttonClassName} {...props}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <NavLink to={to} className={buttonClassName} {...props}>
        {children}
      </NavLink>
    );
  }

  return (
    <button type={type} className={buttonClassName} {...props}>
      {children}
    </button>
  );
}