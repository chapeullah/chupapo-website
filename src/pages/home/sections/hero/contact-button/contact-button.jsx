import Button from "@ui/button";

import ContactIcon from "@icons/contact/contact-icon.jsx";

export default function ContactButton() {
  return (
    <Button
      to="/contact"
      variant='accent'
      className="hero__contact-button"
    >
      <ContactIcon variant='accent' className="contact-button__icon" />

      <div className="button__wrapper">
        <h5 className={'button__label'}>Contact</h5>
        <p className={'button__title'}>Get in touch</p>
      </div>
    </Button>
  );
}
