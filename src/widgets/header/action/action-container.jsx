import MobileMenu from "@widgets/header/action/mobile-menu/mobile-menu.jsx";

import ContactsButton from "./buttons/contacts-button.jsx";
import GitHubButton from "./buttons/github-button.jsx";

import "./action-container.css";

export default function ActionContainer() {
  return (
    <div className="action-container">
      <GitHubButton />
      <ContactsButton />
      <MobileMenu />
    </div>
  );
}