import './nav-container.css'

import { useLanguage } from "@i18n/use-language.js";

import LogoContainer from './logo/logo-container.jsx';
import HomeIcon from '@icons/home/home-icon.jsx';
import { NavLink } from 'react-router-dom';
import InfoIcon from '@icons/info/info-icon.jsx';

export default function NavContainer({onNavClick}) {
  const { t } = useLanguage();
  const navContainerTexts = t.common.header.navigation;

  return (
    <nav className="nav-container">
      <LogoContainer />


      <div className="nav-divider"/>

      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav-container__button ${isActive ? 'button-selected' : ''}`
        }
        onClick={onNavClick}
      >
        <HomeIcon className="nav-container__button-icon" />
        <span className="nav-container__button-text">
          <span className="nav-container__button-label">Home</span>
        </span>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `nav-container__button ${isActive ? 'button-selected' : ''}`
        }
        onClick={onNavClick}
      >
        <InfoIcon className="nav-container__button-icon" />
        <span className="nav-container__button-text">
          <span className="nav-container__button-label">About</span>
        </span>
      </NavLink>
    </nav>
  )
}