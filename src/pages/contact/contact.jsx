import './contact.css';

import GithubLogo from '@logos/github/github-logo.jsx';
import MailIcon from '@icons/mail/mail-icon.jsx';
import TelegramLogo from '@logos/telegram/telegram-logo.jsx';

import { useLanguage } from "@i18n/use-language.js";
import Button from '@ui/button/index.js';

const MESSAGE_MAX_HEIGHT = 180;

const contacts = [
  {
    title: 'Email',
    value: 'chapeullah@gmail.com',
    href: 'mailto:chapeullah@gmail.com',
    icon: MailIcon,
  },
  {
    title: 'Telegram',
    value: '@chapeullah',
    href: 'https://t.me/chapeullah',
    icon: TelegramLogo,
  },
  {
    title: 'GitHub',
    value: 'github.com/chapeullah',
    href: 'https://github.com/chapeullah',
    icon: GithubLogo,
  },
];

function handleMessageInput(event) {
  const textarea = event.currentTarget;

  textarea.style.height = 'auto';

  const nextHeight = Math.min(textarea.scrollHeight, MESSAGE_MAX_HEIGHT);

  textarea.style.height = `${nextHeight}px`;
  textarea.style.overflowY =
    textarea.scrollHeight > MESSAGE_MAX_HEIGHT ? 'auto' : 'hidden';
}

export default function Contact() {
  const { t } = useLanguage();
  const contactTexts = t.homepage.contacts;

  return (
    <div className="contact-page">
      <div className="contact-page__header section-layout__header">
        <h1 className="contact-page__header-label section-layout__header-label">
          {contactTexts.headerLabel}
        </h1>

        <h2 className="contact-page__header-title section-layout__header-title">
          {contactTexts.headerTitle}
        </h2>
      </div>

      <div className="contact-page__content">
        <ul className="contact-page__links">
          {contacts.map((contact) => {
            const isExternalLink = !contact.href.startsWith('mailto:');
            const ContactIcon = contact.icon;

            return (
              <li className="contact-page__links-item" key={contact.title}>
                <a
                  className="contact-page__link"
                  href={contact.href}
                  target={isExternalLink ? '_blank' : undefined}
                  rel={isExternalLink ? 'noreferrer noopener' : undefined}
                >
                  <span
                    className="contact-page__link-icon"
                    aria-hidden="true"
                  >
                    <ContactIcon />
                  </span>

                  <span className="contact-page__link-text">
                    <span className="contact-page__link-title">
                      {contact.title}
                    </span>

                    <span className="contact-page__link-value">
                      {contact.value}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <form className="contact-page__form">
          <div className="contact-page__field">
            <input
              className="contact-page__input"
              type="email"
              id="email"
              name="email"
              placeholder=" "
              required
            />

            <label
              htmlFor="email"
              className="contact-page__label"
              onMouseDown={(event) => event.preventDefault()}
            >
              {contactTexts.form.emailLabel}
            </label>

            <div className="contact-page__underline"></div>
          </div>

          <div className="contact-page__field contact-page__field--textarea">
            <textarea
              className="contact-page__textarea"
              id="message"
              name="message"
              placeholder=" "
              rows={1}
              required
              onInput={handleMessageInput}
            />

            <label
              htmlFor="message"
              className="contact-page__label"
              onMouseDown={(event) => event.preventDefault()}
            >
              {contactTexts.form.messageLabel}
            </label>

            <div className="contact-page__underline"></div>
          </div>

          <Button className="contact-page__button" type="submit">
            {contactTexts.form.submitButtonText}
          </Button>
        </form>

        <aside
          className="contact-page__status"
        >
          <p className="contact-page__status-line contact-page__status-line--main">
            {contactTexts.status.main}
          </p>

          <p className="contact-page__status-line">
            {contactTexts.status.firstLine}
          </p>

          <p className="contact-page__status-line">
            {contactTexts.status.secondLine}
          </p>
        </aside>
      </div>
    </div>
  );
}