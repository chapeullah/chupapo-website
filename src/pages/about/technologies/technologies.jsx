import './technologies.css';

import { useLanguage } from '@i18n/use-language.js';
import { technologyItems } from './technology-items.js';
import Divider from '@ui/divider/divider.jsx';

export default function Technologies() {
  const { t } = useLanguage();
  const i18n = t.technologies;

  const listTechnologies = technologyItems.map((group) => (
    <li className="technologies__group" key={group.id}>
      <div className="technologies__group-content">
        <h3 className="technologies__group-title">
          {i18n.groups[group.id]}
        </h3>

        <ul className="technologies__list">
          {group.items.map(({ name, Icon }) => (
            <li className="card technologies__card" key={name}>
              {Icon && <Icon className="technologies__card-icon" />}

              <span className="technologies__card-label">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  ));

  return (
    <section className="technologies">
      <span className="header-chip">
        {i18n.header.chip}
      </span>

      <h2 className="section-layout__title">
        {i18n.header.title}
      </h2>

      <p className="section-layout__description">
        {i18n.header.description}
      </p>

      <Divider className="technologies__divider" />

      <div className="technologies__content">
        <ul className="technologies__groups">
          {listTechnologies}
        </ul>
      </div>
    </section>
  );
}