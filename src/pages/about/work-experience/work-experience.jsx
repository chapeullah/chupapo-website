import './work-experience.css';

import { useLanguage } from '@i18n/use-language.js';
import Divider from '@ui/divider/divider.jsx';
import ExperienceCard from '@pages/about/work-experience/experience-card.jsx';

export default function WorkExperience() {
  const { t } = useLanguage();
  const i18n = t.workExperienceSection;

  const listWorkExperience = i18n.items.map((experience) => (
    <li
      className="work-experience__item"
      key={experience.id}
    >
      <ExperienceCard experience={experience} />
    </li>
  ));

  return (
    <section className="work-experience">
      <span className="header-chip">{i18n.header.chip}</span>

      <h3 className="section-layout__title">
        {i18n.header.title}
      </h3>

      <p className="section-layout__description">
        {i18n.header.description}
      </p>

      <Divider className="work-experience__divider" />

      <div className="work-experience__content section-layout__split">
        <ul className="work-experience__list section-layout__split-right">
          {listWorkExperience}
        </ul>
      </div>
    </section>
  );
}