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
      <div className="about-page__content">
        <Profile />
        <Technologies />
        <WorkExperience />
      </div>
    </div>
  );
}