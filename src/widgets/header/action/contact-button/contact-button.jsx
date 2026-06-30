import './contact-button.css';
import ContactFormIcon from "@icons/contact-form/contact-form-icon.jsx";
import { NavLink } from 'react-router-dom';

export default function ContactButton({onNavClick}) {
  return (
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `contact-button ${isActive ? 'button-selected' : ''}`
      }
      onClick={onNavClick}
    >
      <ContactFormIcon className="contact-button__icon" />
    </NavLink>
  );
}