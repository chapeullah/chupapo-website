import './technologies.css';

import { useLanguage } from "@i18n/use-language.js";
import { technologyItems } from './technology-items.js';

export default function Technologies() {
  const { t } = useLanguage();
  const technologiesTexts = t.homepage.about.technologies;

  return (
    <section className="technologies">
      <h3 className="technologies__title section-layout__title">{technologiesTexts.title}</h3>
      <div className="technologies__content">
        <ol className="technologies__groups">
          {technologyItems.map((group) => (
            <li className="technologies__group" key={group.title}>
              <div className="technologies__group-content">
                <h3 className="technologies__group-title">
                  {group.title}
                </h3>

                <ul className="technologies__list">
                  {group.items.map(({ name, Icon }) => (
                    <li className="technologies__item" key={name}>
                      <Icon className="technologies__icon" />
                      <span className="technologies__item-label">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}