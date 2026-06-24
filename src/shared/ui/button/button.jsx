import './button.css';

export default function Button({
                                 href,
                                 className = '',
                                 children,
                                 variant = 'default',
                                 type = 'button',
                                 ...props
                               }) {
  const buttonClassName = `button button--${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClassName} {...props}>
      {children}
    </button>
  );
}