import "./nav-container.css"

import AboutButton from "./buttons/about-button.jsx";
import HomeButton from "./buttons/home-button.jsx";
import ProjectsButton from "./buttons/projects-button.jsx";

import LogoContainer from "./logo/logo-container.jsx";

export default function NavContainer() {
  return (
    <nav className="nav-container">
      <LogoContainer />
      <div className="nav-divider"/>
      <HomeButton />
      <ProjectsButton />
      <AboutButton />
    </nav>
  )
}
