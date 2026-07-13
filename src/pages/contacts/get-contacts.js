import { site } from '@i18n/site.js';

import TelegramLogoOriginal from '@logos/telegram/telegram-logo-original.jsx';
import GmailLogo from '@logos/gmail/gmail-logo.jsx';
import MaxLogoOriginal from '@logos/max/max-logo-original.jsx';

export function getContacts(i18n) {
  return [
    {
      id: "gmail",
      name: site.contacts.email.label,
      value: site.contacts.email.value,
      description: i18n.items.gmail.description,
      href: `mailto:${site.contacts.email}`,
      Icon: GmailLogo,
    },
    {
      id: "telegram",
      name: site.contacts.telegram.label,
      value: site.contacts.telegram.username,
      description: i18n.items.telegram.description,
      href: site.contacts.telegram.link,
      Icon: TelegramLogoOriginal,
    },
    {
      id: "max",
      name: site.contacts.max.label,
      value: null,
      description: i18n.items.max.description,
      href: site.contacts.max.link,
      Icon: MaxLogoOriginal,
    },
  ];
}