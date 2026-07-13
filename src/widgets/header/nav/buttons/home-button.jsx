import HomeIcon from "@icons/home/home-icon.jsx";
import { NavLink } from "react-router-dom";
import { homeLink } from "@widgets/header/links.js";
import { useLanguage } from "@i18n/use-language.js";

export default function HomeButton({onNavClick}) {
  const { t } = useLanguage();
  const i18n = t.header;

  return (
    <NavLink
      to={homeLink.to}
      className={({ isActive }) =>
        `nav-container__button ${isActive ? "button-selected" : ""}`
      }
      onClick={onNavClick}
    >
      <HomeIcon className="nav-container__button-icon" />
      <span className="nav-container__button-text">
          <span className="nav-container__button-label">{i18n.home}</span>
        </span>
    </NavLink>
  );
}
