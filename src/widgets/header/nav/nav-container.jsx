import './nav-container.css'

import AboutButton from '@widgets/header/nav/buttons/about-button.jsx';
import HomeButton from '@widgets/header/nav/buttons/home-button.jsx';
import ProjectsButton from '@widgets/header/nav/buttons/projects-button.jsx';

import LogoContainer from './logo/logo-container.jsx';

export default function NavContainer({onNavClick}) {
  return (
    <nav className="nav-container">
      <LogoContainer />
      <div className="nav-divider"/>
      <HomeButton onNavClick={onNavClick} />
      <AboutButton onNavClick={onNavClick} />
      <ProjectsButton onNavClick={onNavClick} />
    </nav>
  )
  //
}