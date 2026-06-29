import './go-back-button.css';

import './variants/default.css';
import './variants/ghost.css';

import { useLocation, useNavigate } from 'react-router-dom';

import ArrowLeftIcon from '@icons/arrow-left/arrow-left-icon.jsx';

export default function GoBackButton({
  to = '/',
  className = '',
  variant = 'default',
  type = 'button',
  ...props
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const buttonClassName = `go-back-button go-back-button--${variant} ${className}`.trim();

  function handleClick() {
    if (location.key !== 'default') {
      navigate(-1);
    } else {
      navigate(to, { replace: true });
    }
  }

  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={handleClick}
      {...props}
    >
      <ArrowLeftIcon className="button__icon" />
      <h5 className="button__label">Go back</h5>
    </button>
  );
}