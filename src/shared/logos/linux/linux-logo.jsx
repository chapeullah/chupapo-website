import Tux from './tux.svg';

export default function LinuxLogo({ className = '' }) {
  return (
    <img
      className={`logo linux-logo ${className}`}
      src={Tux}
      alt=""
      aria-hidden="true"
      draggable="false"
    />
  );
}