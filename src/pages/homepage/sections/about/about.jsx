import './about.css';

import Profile from './profile/profile.jsx';
import Technologies from './technologies/technologies.jsx';
import WorkExperience from './work-experience/work-experience.jsx';

import { useLanguage } from "../../../../i18n/use-language.js";

export default function About() {
  const { t } = useLanguage();
  const aboutTexts = t.homepage.about;

  return (
    <section id={"about"} className="about">
      <div className="about__header">
        <h1 className="about__header-label section-layout__header-label">{aboutTexts.headerLabel}</h1>
        <h2 className="about__header-title section-layout__header-title">{aboutTexts.headerTitle}</h2>
      </div>

      <Profile />
      <Technologies />
      <WorkExperience />
    </section>
  );
}