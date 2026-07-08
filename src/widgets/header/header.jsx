import { useState } from "react";

import "./header.css";

import NavContainer from "./nav/nav-container.jsx";
import ActionContainer from "./action/action-container.jsx";
import MobileMenu from "@widgets/header/action/mobile-menu/mobile-menu.jsx";

export default function Header({ className = "" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

   return (
    <header className={`header ${className}`}>
      <NavContainer />

      <ActionContainer />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClick={handleMobileMenuClick}
      />

      <div
        className={`header__mobile-menu ${
          isMobileMenuOpen ? "header__mobile-menu--open" : ""
        }`}
      >
      </div>
    </header>
  );
}