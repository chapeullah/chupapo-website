import "./contacts-page.css";

import { useLanguage } from "@i18n/use-language.js";

import ContactCard from "@pages/contacts/contact-card.jsx";
import { getContacts } from "@pages/contacts/get-contacts.js";

export default function ContactsPage() {
  const { t } = useLanguage();
  const i18n = t.contacts;

  const contacts = getContacts(i18n);

  return (
    <div className="contacts-page">
      <h1 className="contacts-page__title">{i18n.header}</h1>
      <section className="contacts-page__contacts">
        {contacts.map((contact) => (<ContactCard key={contact.id} contact={contact} />))}
      </section>
    </div>
  );
}
