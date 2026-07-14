import "./experience-card.css";

export default function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">
      <header className="experience-card__header">
        <div className="experience-card__main">
          <div className="experience-card__role-row">
            <h3 className="experience-card__role">{experience.position}</h3>
          </div>
          <p className="experience-card__company">{experience.company}</p>
        </div>
        <p className="experience-card__period">{experience.period}</p>
      </header>
      <p className="experience-card__description">{experience.description}</p>
      <div className="experience-card__section">
        <h4 className="experience-card__section-title">{experience.technologiesTitle}</h4>
        <ul className="experience-card__technologies">
          {experience.technologies.map((technology) => (
            <li
              className="experience-card__technology"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}