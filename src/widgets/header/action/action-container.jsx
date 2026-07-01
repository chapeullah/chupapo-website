import './action-container.css';

import ContactButton from './contact-button/contact-button.jsx';
import GitHubButton from './github-button/github-button.jsx';

export default function ActionContainer() {
  return (
    <div className="action-container">
      <GitHubButton />
      <ContactButton />
    </div>
  );
}