import HomeIcon from '@icons/home/home-icon.jsx';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '@i18n/use-language.js';
import { projectsLink } from '@widgets/header/links.js';
import FileIcon from '@icons/file/file-icon.jsx';

export default function ProjectsButton({onNavClick}) {
  const { t } = useLanguage();
  const i18n = t.header;

  return (
    <NavLink
      to={projectsLink.to}
      className={({ isActive }) =>
        `nav-container__button ${isActive ? 'button-selected' : ''}`
      }
      onClick={onNavClick}
    >
      <FileIcon className="nav-container__button-icon" />
      <span className="nav-container__button-text">
          <span className="nav-container__button-label">{i18n.projects}</span>
        </span>
    </NavLink>
  );
}