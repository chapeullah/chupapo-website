import Button from '@ui/button/index.js';

import ContactIcon from '@icons/contact/contact-icon.jsx';
import { useLanguage } from '@i18n/use-language.js';

export default function ContactButton() {
  const { t } = useLanguage();
  const i18n = t.heroSection.buttons;

  return (
    <Button
      to="/contact"
      variant="accent"
      className="hero__contact-button"
    >
      <ContactIcon variant="accent" className="contact-button__icon" />
      <div className="button__wrapper">
        <h5 className={"button__label"}>{i18n.contact.title}</h5>
        <p className={"button__title"}>{i18n.contact.subtitle}</p>
      </div>
    </Button>
  );
}
