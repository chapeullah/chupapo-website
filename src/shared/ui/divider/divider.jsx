import './divider.css';

import './variants/horizontal.css';
import './variants/horizontal-p.css';

export default function Divider({
  variant = 'horizontal',
  className = '',
}) {
  return (
    <div className={`divider divider--${variant} ${className}`.trim()} />
  );
}