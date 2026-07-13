import { NavLink } from "react-router-dom";

import ContactIcon from "@icons/contact/contact-icon.jsx";
import { contactsLink } from "@widgets/header/links.js";
import { useLanguage } from "@i18n/use-language.js";

export default function ContactsButton({onNavClick}) {
  const { t } = useLanguage();
  return (
    <NavLink
      to={contactsLink.to}
      aria-label={t.header.contacts}
      className={({ isActive }) =>
        `action-button ${isActive ? "button-selected" : ""}`
      }
      onClick={onNavClick}
    >
      <ContactIcon className="action-button__icon" />
    </NavLink>
  );
}
