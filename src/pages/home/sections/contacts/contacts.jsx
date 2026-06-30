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



  return (
    <section id="contacts" className="contacts">

    </section>
  );
}