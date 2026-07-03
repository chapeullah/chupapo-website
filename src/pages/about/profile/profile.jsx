import './profile.css';

import Divider from '@ui/divider/divider.jsx';
import MapPinIcon from '@icons/map-pin/map-pin-icon.jsx';
import { getAge } from '@pages/about/profile/get-age.jsx';
import { getYearWord } from '@pages/about/profile/get-year-word.jsx';
import { getExperienceYears } from '@pages/about/profile/get-experience-years.jsx';

export default function Profile() {
  const age = getAge('2002-08-15');
  const ageText = `${age} ${getYearWord(age)}`;

  const experienceYears = getExperienceYears('2024-08-01');
  const experienceText = `${String(experienceYears).replace('.', ',')}+ ${getYearWord(experienceYears)}`;

  return (
    <section className="profile">
      <div className="profile__main">
        <h3 className="section-layout__title">Денис Шамко</h3>

        <p className="section-layout__description">
          Программирую прикладные системы для автоматизации ручных процессов.
        </p>
      </div>

      <div className="profile__location">
        <MapPinIcon className="profile__map-pin-icon" />
        <span>Москва, Россия</span>
      </div>

      <p className="profile__age">
        Возраст: {ageText}
      </p>

      <Divider className="profile__divider" />

      <div className="profile__meta">
        <div className="profile__meta-list">
          <div className="profile__meta-item">
            <span className="profile__meta-label">Стаж</span>
            <strong className="profile__meta-value">{experienceText}</strong>
          </div>

          <div className="profile__meta-item">
            <span className="profile__meta-label">Фокус</span>
            <strong className="profile__meta-value">Автоматизация процессов</strong>
          </div>

          <div className="profile__meta-item">
            <span className="profile__meta-label">Языки</span>
            <strong className="profile__meta-value">Java, C++</strong>
          </div>
        </div>

        <div className="profile__contacts">
          <span className="profile__contacts-title">Contact info</span>

          <a className="profile__meta-item" href="mailto:chapeullah@gmail.com">
            <span className="profile__meta-label">Email</span>
            <strong className="profile__meta-value">chapeullah@gmail.com</strong>
          </a>

          <a
            className="profile__meta-item"
            href="https://t.me/chapeullah"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="profile__meta-label">Telegram</span>
            <strong className="profile__meta-value">@chapeullah</strong>
          </a>

          <a
            className="profile__meta-item"
            href="https://github.com/chapeullah"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="profile__meta-label">GitHub</span>
            <strong className="profile__meta-value">github.com/chapeullah</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

/*
  добавить Available for Work
  добавить скачивание CV / портфолио PDF
  добавить ссылки на GitHub, почту, Telegram
*/