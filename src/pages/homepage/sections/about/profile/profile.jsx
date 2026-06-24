import './profile.css';

import { useLanguage } from "../../../../../i18n/use-language.js";

export default function Profile() {
  const { t } = useLanguage();
  const profileTexts = t.homepage.about.profile;

  return (
    <section className="profile">
      <div className="profile__content">
        <div className="profile__content-left">
          <div className="profile__user">
            <div className="profile__person">
              <h3 className="profile__name">{profileTexts.greeting}</h3>
              <h3 className="profile__name">
                {profileTexts.iAm} <span className="profile__name-accent">
                  {profileTexts.name}
                </span>
              </h3>
            </div>
          </div>
          <div className="profile__description-content">
            <p className="profile__paragraph">{profileTexts.description}</p>
          </div>
        </div>
        <div className="profile__content-right">
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