import './header.css';

import LogoContainer from './logo/logo-container.jsx';
import NavContainer from './nav/nav-container.jsx';
import ActionContainer from './action/action-container.jsx';

export default function Header({ className = '' }) {
  return (
    <header id="header" className={`header ${className}`}>
      <LogoContainer />
      <NavContainer />
      <ActionContainer />
    </header>
  );
}