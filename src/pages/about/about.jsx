import './about.css';

import Profile from './profile/profile.jsx';
import Technologies from './technologies/technologies.jsx';
import WorkExperience from './work-experience/work-experience.jsx';

import { useLanguage } from '@i18n/use-language.js';

export default function About() {
  const { t } = useLanguage();
  const i18n = t.about;

  return (
    <div  className="about-page">
      <div className="about-page__header">
        <h1 className="about-page__header-label section-layout__header-label">{i18n.header.label}</h1>
        <h2 className="about-page__header-title section-layout__header-title">{i18n.header.title}</h2>
      </div>

      <Profile />
      <Technologies />
      <WorkExperience />
    </div>
  );
}