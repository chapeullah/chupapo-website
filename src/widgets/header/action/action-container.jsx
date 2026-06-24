import './action-container.css';

import ContactButton from './contact-button/contact-button.jsx';

export default function ActionContainer() {
  return (
    <div className="action-container">
      <div className="action-container__button-wrapper">
        <ContactButton />
      </div>
    </div>
  );
}