import './header.css';

import LogoContainer from './logo/logo-container.jsx';
import NavContainer from './nav/nav-container.jsx';
import ActionContainer from './action/action-container.jsx';

export default function Header() {
  return (
    <header id="header" className="header">
      <LogoContainer />
      <NavContainer />
      <ActionContainer />
    </header>
  );
}