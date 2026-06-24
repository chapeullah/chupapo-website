import './contacts.css';

import GithubLogo from '@logos/github/github-logo.jsx';
import MailIcon from '@icons/mail/mail-icon.jsx';
import TelegramLogo from '@logos/telegram/telegram-logo.jsx';

import { useLanguage } from "@i18n/use-language.js";

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

export default function Contacts() {
  const { t } = useLanguage();
  const contactsTexts = t.homepage.contacts;

  function handleMessageInput(event) {
    const textarea = event.currentTarget;

    textarea.style.height = 'auto';

    const nextHeight = Math.min(textarea.scrollHeight, MESSAGE_MAX_HEIGHT);

    textarea.style.height = `${nextHeight}px`;
    textarea.style.overflowY =
      textarea.scrollHeight > MESSAGE_MAX_HEIGHT ? 'auto' : 'hidden';
  }

  return (
    <section id="contacts" className="contacts">
      <div className="contacts__header section-layout__header">
        <h1 className="contacts__header-label section-layout__header-label">
          {contactsTexts.headerLabel}
        </h1>

        <h2 className="contacts__header-title section-layout__header-title">
          {contactsTexts.headerTitle}
        </h2>
      </div>

      <div className="contacts__content">
        <ul className="contacts__links">
          {contacts.map((contact) => {
            const isExternalLink = !contact.href.startsWith('mailto:');
            const ContactIcon = contact.icon;

            return (
              <li className="contacts__links-item" key={contact.title}>
                <a
                  className="contacts__link"
                  href={contact.href}
                  target={isExternalLink ? '_blank' : undefined}
                  rel={isExternalLink ? 'noreferrer' : undefined}
                >
                  <span
                    className="contacts__link-icon"
                    aria-hidden="true"
                  >
                    <ContactIcon />
                  </span>

                  <span className="contacts__link-text">
                    <span className="contacts__link-title">
                      {contact.title}
                    </span>

                    <span className="contacts__link-value">
                      {contact.value}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <form className="contacts__form">
          <div className="contacts__field">
            <input
              className="contacts__input"
              type="email"
              id="email"
              name="email"
              placeholder=" "
              required
            />

            <label
              htmlFor="email"
              className="contacts__label"
              onMouseDown={(event) => event.preventDefault()}
            >
              {contactsTexts.form.emailLabel}
            </label>

            <div className="contacts__underline"></div>
          </div>

          <div className="contacts__field contacts__field--textarea">
            <textarea
              className="contacts__textarea"
              id="message"
              name="message"
              placeholder=" "
              rows={1}
              required
              onInput={handleMessageInput}
            />

            <label
              htmlFor="message"
              className="contacts__label"
              onMouseDown={(event) => event.preventDefault()}
            >
              {contactsTexts.form.messageLabel}
            </label>

            <div className="contacts__underline"></div>
          </div>

          <button className="contacts__button" type="submit">
            {contactsTexts.form.submitButtonText}
          </button>
        </form>

        <aside
          className="contacts__status"
        >
          <p className="contacts__status-line contacts__status-line--main">
            {contactsTexts.status.main}
          </p>

          <p className="contacts__status-line">
            {contactsTexts.status.firstLine}
          </p>

          <p className="contacts__status-line">
            {contactsTexts.status.secondLine}
          </p>
        </aside>
      </div>
    </section>
  );
}