import ContactIcon from "@icons/contact/contact-icon.jsx";

import { NavLink } from 'react-router-dom';
import { contactLink } from '@widgets/header/links.js';

export default function ContactButton({onNavClick}) {
  return (
    <NavLink
      to={contactLink.to}
      className={({ isActive }) =>
        `action-button ${isActive ? 'button-selected' : ''}`
      }
      onClick={onNavClick}
    >
      <ContactIcon className="action-button__icon" />
    </NavLink>
  );
}