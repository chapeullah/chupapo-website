import ContactButton from './contact-button/contact-button.jsx';
import './action-container.css';

export default function ActionContainer() {
  return (
    <div className="action-container">
      <div className="action-container__button-wrapper">
        <ContactButton />
      </div>
    </div>
  );
}