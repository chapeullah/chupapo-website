import './header.css';

import NavContainer from './nav/nav-container.jsx';
import ActionContainer from './action/action-container.jsx';

export default function Header({ className = '' }) {
  return (
    <header className={`header ${className}`}>
      <NavContainer />
      <ActionContainer />
    </header>
  );
}