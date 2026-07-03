import './action-container.css';

import ContactButton from './contact-button/contact-button.jsx';
import GitHubButton from './github-button/github-button.jsx';
import MobileMenu from '@widgets/header/action/mobile-menu/mobile-menu.jsx';

export default function ActionContainer() {
  return (
    <div className="action-container">
      <GitHubButton />
      <ContactButton />
      <MobileMenu />
    </div>
  );
}