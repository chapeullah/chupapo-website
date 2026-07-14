import Button from "@ui/button";

import ContactIcon from "@icons/contact/contact-icon.jsx";
import { useLanguage } from "@i18n/use-language.js";
import { navigation } from "@config/navigation.js";

export default function ContactButton() {
  const { t } = useLanguage();
  const i18n = t.hero.buttons;

  return (
    <Button
      to={navigation.contacts.to}
      variant="accent"
      className="hero__contact-button"
    >
      <ContactIcon className="hero-button__icon" />
      <div className="hero-button__wrapper">
        <h5 className="hero-button__label">{i18n.contact.title}</h5>
        <p className="hero-button__title">{i18n.contact.subtitle}</p>
      </div>
    </Button>
  );
}
