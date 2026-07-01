import './profile.css';

import { useLanguage } from "@i18n/use-language.js";

export default function Profile() {
  const { t } = useLanguage();
  const profileTexts = t.homepage.about.profile;

  return (
    <section className="profile">
      <span className="header-chip">Profile</span>

      <h3 className="section-layout__title">
        Обо мне.
      </h3>

      <p className="section-layout__description">
        Привет! Я Денис Шамко, разрабатываю прикладные системы, которые помогают переводить ручные процессы
        в удобные цифровые решения.
      </p>

      <div className="profile__content">
        <div className="profile__content-left">
          <div className="profile__person">
            <h3 className="profile__name">Привет,</h3>
            <h3 className="profile__name">
              я <span className="profile__name-accent">Денис Шамко</span>
            </h3>
          </div>
        </div>

        <div className="profile__content-right">
          <p className="profile__paragraph">
            Разрабатываю прикладные системы, веб- и desktop-приложения с серверной
            логикой, API, авторизацией, базами данных и интеграциями.
          </p>
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