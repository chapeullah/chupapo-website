import "./header.css";

import NavContainer from "./nav/nav-container.jsx";
import ActionContainer from "./action/action-container.jsx";
import MobileMenu from "./mobile-menu/mobile-menu.jsx";

export default function Header({ className = "" }) {
  return (
    <header className={`header ${className}`}>
      <NavContainer />
      <ActionContainer />
      <MobileMenu />
    </header>
  );
}
