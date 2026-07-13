import "./technologies.css";

import { useLanguage } from "@i18n/use-language.js";
import { technologyItems } from "./technology-items.js";
import Divider from "@ui/divider/divider.jsx";

export default function Technologies() {
  const { t } = useLanguage();
  const i18n = t.technologies;

  const listTechnologies = technologyItems.map((group) => (
    <li className="technologies__group" key={group.id}>
      <div className="technologies__group-content">
        <h3 className="technologies__group-title">{i18n.groups[group.id]}</h3>

        <ul className="technologies__list">
          {group.items.map(({ name, Icon, href }) => (
            <li className="technologies__card" key={name}>
              <a
                className="technologies__card-link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Icon && <Icon className="technologies__card-icon" />}
                <span className="technologies__card-label">{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  ));

  return (
    <section className="technologies">
      <header className={"section-layout__header-center"}>
        <span className="section-layout__chip">{i18n.header.chip}</span>
        <h2 className="section-layout__title">{i18n.header.title}</h2>
        <p className="section-layout__description">{i18n.header.description}</p>
      </header>

      <Divider className="technologies__divider" />

      <div className="technologies__content">
        <ul className="technologies__groups">
          {listTechnologies}
        </ul>
      </div>
    </section>
  );
}
