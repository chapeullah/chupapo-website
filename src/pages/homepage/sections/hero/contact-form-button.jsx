import './contact-form-button.css';

import './hero.css';

import ContactFormIcon from "@icons/contact-form/contact-form-icon.jsx";

export default function ContactFormButton() {
  return (
    <a href="/contact-form" className="button contact-form-button">
      <ContactFormIcon className="button__icon" />
      <div className="button__wrapper">
        <h5 className={'button__label'}>Contact</h5>
        <p className={'button__title'}>Get in touch</p>
      </div>
    </a>
  );
}