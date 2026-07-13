import { aboutLink } from "@widgets/header/links.js";
import { NavLink } from "react-router-dom";
import { useLanguage } from "@i18n/use-language.js";
import IdCardIcon from "@icons/id-card/id-card-icon.jsx";

export default function AboutButton({onNavClick}) {
  const { t } = useLanguage();
  const i18n = t.header;

  return (
    <NavLink
      to={aboutLink.to}
      className={({ isActive }) =>
        `nav-container__button ${isActive ? "button-selected" : ""}`
      }
      onClick={onNavClick}
    >
      <IdCardIcon className="nav-container__button-icon" />
      <span className="nav-container__button-text">
          <span className="nav-container__button-label">{i18n.about}</span>
        </span>
    </NavLink>
  );
}
