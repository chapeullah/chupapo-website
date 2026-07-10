import './service-cards.css';

import Divider from '@ui/divider/divider.jsx';
import { useLanguage } from '@i18n/use-language.js';
import { serviceItems } from './service-items.js';

export default function ServiceCards() {
  const { t } = useLanguage();
  const i18n = t.serviceSection;

  const listServices = i18n.services.map((service) => {
    const serviceMeta = serviceItems.find((item) => item.id === service.id);
    const Icon = serviceMeta?.icon ?? null;

    return (
      <article className="card service-card" key={service.id}>
        {Icon && <Icon className="service-card__icon" />}
        <h3 className="service-card__name">{service.title}</h3>
        {service.description && (
          <p className="service-card__description">{service.description}</p>
        )}
      </article>
    );
  });

  return (
    <div className="service-section">
      <span className="header-chip">{i18n.header.chip}</span>
      <h3 className="section-layout__title">{i18n.header.title}</h3>
      <p className="section-layout__description">{i18n.header.description}</p>
      <Divider variant="horizontal" className="service-cards__divider" />
      <div className="service-cards">
        {listServices}
      </div>
    </div>
  );
}