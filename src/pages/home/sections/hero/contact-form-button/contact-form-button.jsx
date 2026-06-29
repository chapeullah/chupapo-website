import Button from "@ui/button";

import ContactFormIcon from "@icons/contact-form/contact-form-icon.jsx";

export default function ContactFormButton() {
  return (
    <Button to="/contact-form" variant='accent' className="contact-form-button">
      <ContactFormIcon variant='accent' className="contact-form-button__icon" />

      <div className="button__wrapper">
        <h5 className={'button__label'}>Contact</h5>
        <p className={'button__title'}>Get in touch</p>
      </div>
    </Button>
  );
}
