import Cube from './cube/cube.jsx';

import './hero.css';

import ContactFormButton from "./contact-form-button.jsx";
import GitHubButton from "./github-button.jsx";

export default function Hero() {
  return (
    <section className="hero" data-cube-tracking-area>
      <div className="hero-left">
        <h1 className={'hero-left__label'}>Chupapo</h1>
        <p className={'hero-left__text'}>
          A sleek, open-source file explorer built for Windows, designed to help you organize files and folders with
          ease.
        </p>
        <div className={'buttons-spacer'}>
          <ContactFormButton />
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