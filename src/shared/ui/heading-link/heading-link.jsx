import './heading-link.css';

import LinkIcon from '@icons/link/link-icon.jsx';

export default function HeadingLink({
  href = '/',
  title = '',
  className = '',
  ...props
}) {
  const linkClassName = `heading-link ${className}`.trim();

  return (
    <a href={href} className={linkClassName} {...props}>
      <span className='heading-link__title'>{title}</span>
      <LinkIcon className="heading-link__icon" />
    </a>
  );
}