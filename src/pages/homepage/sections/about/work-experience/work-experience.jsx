import './work-experience.css';

import {useLanguage} from "@i18n/use-language.js";
// import GaugeIcon from "@icons/gauge/gauge-icon.jsx";

export default function WorkExperience() {
  const { t } = useLanguage();
  const workExperienceTexts = t.homepage.about.workExperience;

  return (
    <section className="work-experience">
      <h3 className="work-experience__title section-layout__title">{workExperienceTexts.title}</h3>

      <div className="work-experience__content section-layout__split">
        <ol className="work-experience__list section-layout__split-right">
          {workExperienceTexts.items.map((experience) => (
            <li className="work-experience__item" key={experience.id}>
              <article className="experience-card">
                {/*<div className="experience-card__icon-wrapper">*/}
                {/*  <GaugeIcon className="experience-card__icon" />*/}
                {/*</div>*/}

                <div className="experience-card__body">
                  <header className="experience-card__header">
                    <div className="experience-card__main">
                      <div className="experience-card__role-row">
                        <h3 className="experience-card__role">
                          {experience.role}
                        </h3>
                      </div>

                      <p className="experience-card__company">
                        {experience.company}
                      </p>
                    </div>

                    <p className="experience-card__period">
                      {experience.period}
                    </p>
                  </header>

                  <p className="experience-card__description">
                    {experience.description}
                  </p>

                  <div className="experience-card__section">
                    <h4 className="experience-card__section-title">
                      {workExperienceTexts.technologiesTitle}
                    </h4>

                    <ol className="experience-card__technologies">
                      {experience.technologies.map((technology) => (
                        <li
                          className="experience-card__technology"
                          key={technology}
                        >
                          {technology}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}