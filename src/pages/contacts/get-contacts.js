import { site } from '@i18n/site.js';

import TelegramLogoOriginal from '@logos/telegram/telegram-logo-original.jsx';
import GmailLogo from '@logos/gmail/gmail-logo.jsx';
import GitHubLogoOriginal from '@logos/github/github-logo-original.jsx';

export function getContacts(i18n) {
  return [
    {
      id: 'telegram',
      name: site.contacts.telegram.label,
      value: site.contacts.telegram.username,
      description: i18n.items.telegram.description,
      href: site.contacts.telegram.link,
      Icon: TelegramLogoOriginal,
    },
    {
      id: 'gmail',
      name: 'Gmail',
      value: site.contacts.email,
      description: i18n.items.gmail.description,
      href: `mailto:${site.contacts.email}`,
      Icon: GmailLogo,
    },
    {
      id: 'github',
      name: site.contacts.github.label,
      value: site.contacts.github.username,
      description: i18n.items.github.description,
      href: site.contacts.github.link,
      Icon: GitHubLogoOriginal,
    },
  ];
}