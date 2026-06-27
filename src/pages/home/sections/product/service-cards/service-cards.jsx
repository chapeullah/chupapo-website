import './service-cards.css';

import { services } from "./services.js";

const listServices = services.map((service) => {
  const Icon = service.icon ? service.icon : null;

  return (
    <article className="service-card" key={service.name}>
      {Icon && <Icon className='icon service-card__icon' />}
      <h3 className='service-card__name'>{service.name}</h3>
      <p className='service-card__description'>{service.description}</p>
    </article>
  );
});

export default function ServiceCards() {
  return (
      <div className='service-cards'>
        {listServices}
      </div>
  );
}