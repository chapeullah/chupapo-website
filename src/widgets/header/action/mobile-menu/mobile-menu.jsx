import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './mobile-menu.css';
import ContactIcon from '@icons/contact/contact-icon.jsx';
import InfoIcon from '@icons/info/info-icon.jsx';
import HomeIcon from '@icons/home/home-icon.jsx';
import GitHubLogo from '@logos/github/github-logo.jsx';
import Divider from '@ui/divider/divider.jsx';
import { useLanguage } from '@i18n/use-language.js';
import { site } from '@i18n/site.js';

export default function MobileMenu() {
  const { t } = useLanguage();
  const i18n = t.header;

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  const getLinkClassName = ({ isActive }) =>
    `mobile-menu__link ${isActive ? 'mobile-menu__link--selected' : ''}`;

  return (
    <div className="mobile-menu">
      <button
        className={`mobile-menu__button ${
          isOpen ? 'mobile-menu__button--open' : ''
        }`}
        type="button"
        onClick={handleMenuToggle}
        aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
        aria-expanded={isOpen}
      >
        <span className="mobile-menu__button-line" />
        <span className="mobile-menu__button-line" />
        <span className="mobile-menu__button-line" />
      </button>

      <div
        className={`mobile-menu__content ${
          isOpen ? 'mobile-menu__content--open' : ''
        }`}
      >
        <NavLink
          to="/"
          end
          className={getLinkClassName}
          onClick={handleMenuClose}
        >
          <HomeIcon className="mobile-menu__link-icon" />
          <span className="mobile-menu__link-label">{i18n.home}</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={getLinkClassName}
          onClick={handleMenuClose}
        >
          <InfoIcon className="mobile-menu__link-icon" />
          <span className="mobile-menu__link-label">{i18n.projects}</span>
        </NavLink>

        <NavLink
          to="/about"
          className={getLinkClassName}
          onClick={handleMenuClose}
        >
          <InfoIcon className="mobile-menu__link-icon" />
          <span className="mobile-menu__link-label">{i18n.about}</span>
        </NavLink>

        <Divider />

        <a
          href={site.contacts.github.link}
          className="mobile-menu__link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleMenuClose}
        >
          <GitHubLogo className="mobile-menu__link-icon" />
          <span className="mobile-menu__link-label">
            {site.contacts.github.label}
          </span>
        </a>

        <NavLink
          to="/contacts"
          className={getLinkClassName}
          onClick={handleMenuClose}
        >
          <ContactIcon className="mobile-menu__link-icon" />
          <span className="mobile-menu__link-label">{i18n.contacts}</span>
        </NavLink>
      </div>
    </div>
  );
}