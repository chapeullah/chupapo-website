import Cube from "./cube/cube.jsx";

import "./hero.css";

import ContactButton from "./contact-button.jsx";
import GitHubButton from "./github-button.jsx";
import { useLanguage } from "@i18n/use-language.js";

import { site } from "@config/site.js";

export default function Hero() {
  const { t } = useLanguage();
  const i18n = t.hero;

  return (
    <section className="hero" data-cube-tracking-area>
      <div className="hero-left">
        <h1 className={"hero-left__label"}>{site.chupapo.brand}</h1>
        <p className={"hero-left__text"}>{i18n.description}</p>
        <div className={"buttons-spacer"}>
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
