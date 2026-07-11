import './profile.css';

import { useLanguage } from '@i18n/use-language.js';
import { site } from '@i18n/site.js';

import MapPinIcon from '@icons/map-pin/map-pin-icon.jsx';

import { getAge } from '@pages/about/profile/get-age.js';
import { getExperienceYears } from '@pages/about/profile/get-experience-years.js';
import { formatYears } from '@pages/about/profile/format-years.js';

import profilePhoto from '@assets/photo.jpg';
import { Link } from 'react-router-dom';

export default function Profile() {
  const { t, language } = useLanguage();
  const i18n = t.aboutSection;

  const age = getAge(site.chupapo.birthDate);
  const ageText = formatYears(age, language);

  const experienceYears = getExperienceYears(
    site.chupapo.experienceStartDate
  );

  const experienceText = formatYears(experienceYears, language, {
    plus: true,
  });

  return (
    <section className="profile-section">
      <div className="profile">
        <div className="profile__main">
          <div className="profile__content">
            <header className="profile__header">
              <h2 className="profile__title">
                <spanp className="profile__name">{i18n.name}</spanp>
                {" / "}
                <Link
                  to="/"
                  className="profile__brand"
                >
                  {site.chupapo.brand}
                </Link>
              </h2>

              <p className="profile__role">{i18n.role}</p>
            </header>

            <p className="profile__description">
              {i18n.description}
            </p>

            <div className="profile__identity">
              <span className="profile__identity-item">
                <MapPinIcon />
                {i18n.location}
              </span>

              <span className="profile__identity-item">
                {ageText}
              </span>

              <span className="profile__identity-item">
                {experienceText} {i18n.experience.label}
              </span>
            </div>

            <dl className="profile__details">
              <div className="profile__detail">
                <dt>{i18n.focus.label}</dt>
                <dd>{i18n.focus.value}</dd>
              </div>

              <div className="profile__detail">
                <dt>{i18n.languages.label}</dt>
                <dd>{i18n.languages.value}</dd>
              </div>
            </dl>
          </div>

          <img
            className="profile__photo"
            src={profilePhoto}
            alt={i18n.name}
          />
        </div>
      </div>
    </section>
  );
}