import './service-cards.css';

import { services } from "./services.js";
import Divider from '@ui/divider/divider.jsx';

const listServices = services.map((service) => {
  const Icon = service.icon ? service.icon : null;
  const Description = service.description ? service.description : null;

  return (
    <article className="card service-card" key={service.name}>
      {Icon && <Icon className='icon service-card__icon' />}
      <h3 className='service-card__name'>{service.name}</h3>
      {Description && <p className='service-card__description'>{Description}</p>}
    </article>
  );
});

export default function ServiceCards() {


  return (
    <div className='service-section'>
      <span className='header-chip'>Services</span>
      <h3 className="section-layout__title">
        Автоматизация процессов.
      </h3>
      <p className="section-layout__description">
        Создаю системы, которые превращают ручные процессы в рабочие цифровые решения. Помогаю убрать рутину, связать действия в понятный процесс и сделать работу быстрее.
      </p>
      <Divider variant="horizontal" className="service-cards__divider" />
      <div className='service-cards'>
        {listServices}
      </div>
    </div>

  );
}