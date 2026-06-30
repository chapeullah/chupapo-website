import './contact-button.css';
import ContactFormIcon from "@icons/contact-form/contact-form-icon.jsx";

export default function ContactButton() {
  return (
    <a href="/contact" className="contact-button">
      <ContactFormIcon className="contact-button__icon" />
    </a>
  );
}