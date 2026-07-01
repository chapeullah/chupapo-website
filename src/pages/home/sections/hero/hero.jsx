import Cube from './cube/cube.jsx';

import './hero.css';

import ContactButton from "./contact-button/contact-button.jsx";
import GitHubButton from "./github-button/github-button.jsx";

export default function Hero() {
  return (
    <section className="hero" data-cube-tracking-area>
      <div className="hero-left">
        <h1 className={'hero-left__label'}>Chupapo</h1>
        <p className={'hero-left__text'}>
          A software developer building reliable business tools, from backend services and APIs to clean web interfaces and automation.
        </p>
        <div className={'buttons-spacer'}>
          <ContactButton />
          <GitHubButton />
        </div>
      </div>
      <div className="hero-right">
        <div className="hero__cube-wrapper">
          <Cube/>
        </div>
      </div>
    </section>
  );
}