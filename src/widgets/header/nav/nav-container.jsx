import './nav-container.css'

import { useLanguage } from "@i18n/use-language.js";

export default function NavContainer({ onNavClick}) {
  const { t } = useLanguage();
  const navContainerTexts = t.common.header.navigation;

  return (
    <nav className="nav-container">
      <a
        href="#product"
        className="nav-container__button-link"
        onClick={onNavClick}
      >
        <span className="nav-container__button-text">
          <span className="nav-container__button-label">{navContainerTexts.product}</span>
        </span>
      </a>

      <a
        href="#about"
        className="nav-container__button-link"
        onClick={onNavClick}
      >
        <span className="nav-container__button-text">
          <span className="nav-container__button-label">{navContainerTexts.about}</span>
        </span>
      </a>

      <a
        href="#contacts"
        className="nav-container__button-link"
        onClick={onNavClick}
      >
        <span className="nav-container__button-text">
          <span className="nav-container__button-label">{navContainerTexts.contacts}</span>
        </span>
      </a>
    </nav>
  )
}