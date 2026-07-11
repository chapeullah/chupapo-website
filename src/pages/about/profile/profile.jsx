import './profile.css';

import { useLanguage } from '@i18n/use-language.js';
import { site } from '@i18n/site.js';

import Divider from '@ui/divider/divider.jsx';
import MapPinIcon from '@icons/map-pin/map-pin-icon.jsx';

import { getAge } from '@pages/about/profile/get-age.js';
import { getExperienceYears } from '@pages/about/profile/get-experience-years.js';
import { formatYears } from '@pages/about/profile/format-years.js';

export default function Profile() {
  const { t, language } = useLanguage();
  const i18n = t.aboutSection;

  const age = getAge(site.chupapo.birthDate);
  const ageText = formatYears(age, language);

  const experienceYears = getExperienceYears(site.chupapo.experienceStartDate);
  const experienceText = formatYears(experienceYears, language, {
    plus: true,
  });

  return (
    <section className="profile-section">
      <div className="profile">
        <header className="profile__header">
          <div>
            <h1 className="profile__name">{i18n.name}</h1>
            <p className="profile__role">{i18n.role}</p>
          </div>

          <span className="profile__status">
          <span className="profile__status-dot" />
            {i18n.status}
        </span>
        </header>

        <p className="profile__description">
          {i18n.description}
        </p>

        <div className="profile__identity">
    <span className="profile__identity-item">
      <MapPinIcon />
      {i18n.location}
    </span>

          <span>{ageText}</span>
          <span>{experienceText} {i18n.experience.label}</span>
        </div>

        <Divider className="profile__divider" />

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
    </section>
  );
}