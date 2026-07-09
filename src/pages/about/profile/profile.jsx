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
    <section className="profile">
      <div className="profile__main">
        <h3 className="section-layout__title">{i18n.name}</h3>
        <p className="section-layout__description">{i18n.description}</p>
      </div>

      <div className="profile__location">
        <MapPinIcon className="profile__map-pin-icon" />
        <span>{i18n.location}</span>
      </div>
      <p className="profile__age">{i18n.age.label}: {ageText}</p>
      <Divider className="profile__divider" />
      <div className="profile__meta">
        <div className="profile__meta-list">
          <div className="profile__meta-item">
            <span className="profile__meta-label">{i18n.experience.label}</span>
            <strong className="profile__meta-value">{experienceText}</strong>
          </div>
          <div className="profile__meta-item">
            <span className="profile__meta-label">{i18n.focus.label}</span>
            <strong className="profile__meta-value">{i18n.focus.value}</strong>
          </div>
          <div className="profile__meta-item">
            <span className="profile__meta-label">{i18n.languages.label}</span>
            <strong className="profile__meta-value">{i18n.languages.value}</strong>
          </div>
        </div>
        <div className="profile__contacts">
          <span className="profile__contacts-title">{i18n.contacts.title}</span>
          <a
            className="profile__meta-item"
            href={`mailto:${site.contacts.email}`}
          >
            <span className="profile__meta-label">{i18n.contacts.email}</span>
            <strong className="profile__meta-value">{site.contacts.email}</strong>
          </a>
          <a
            className="profile__meta-item"
            href={site.contacts.telegram.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="profile__meta-label">{site.contacts.telegram.label}</span>
            <strong className="profile__meta-value">{site.contacts.telegram.username}</strong>
          </a>
          <a
            className="profile__meta-item"
            href={site.contacts.github.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="profile__meta-label">{site.contacts.github.label}</span>
            <strong className="profile__meta-value">{site.contacts.github.link}</strong>
          </a>
        </div>
      </div>
    </section>
  );
}