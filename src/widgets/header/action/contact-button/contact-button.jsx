import './contact-button.css';
import { useLanguage } from "@i18n/use-language.js";

export default function ContactButton() {
  const { t } = useLanguage();
  const contactButtonTexts = t.common.header;

  return (
    <a href="mailto:yourmail@example.com" className="contact-button">
      <span className="contact-button__text">{contactButtonTexts.contactButton}</span>
    </a>
  );
}