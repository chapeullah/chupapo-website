import ContactIcon from "@icons/contact/contact-icon.jsx";

import { NavLink } from 'react-router-dom';

export default function ContactButton({onNavClick}) {
  return (
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `action-button ${isActive ? 'button-selected' : ''}`
      }
      onClick={onNavClick}
    >
      <ContactIcon className="action-button__icon" />
    </NavLink>
  );
}