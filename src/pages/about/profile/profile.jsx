import "./profile.css";

import { useLanguage } from "@i18n/use-language.js";
import { site } from "@config/site.js";

import MapPinIcon from "@icons/map-pin/map-pin-icon.jsx";

import { getAge } from "./get-age.js";
import { getExperienceYears } from "./get-experience-years.js";
import { formatYears } from "./format-years.js";

import profilePhoto from "@assets/photo.webp";
import { Link } from "react-router-dom";

export default function Profile() {
  const { t, language } = useLanguage();
  const i18n = t.about;

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
                <span className="profile__name">{i18n.name}</span>
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
            <p className="profile__description">{i18n.description}</p>
            <div className="profile__identity">
              <span className="profile__identity-item">
                <MapPinIcon />
                {i18n.location}
              </span>
              <span className="profile__identity-item">{ageText}</span>
              <span className="profile__identity-item">{i18n.experience.label} {experienceText}</span>
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
