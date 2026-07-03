import './mobile-menu.css';

export default function MobileMenu({ onClick }) {
  return (
    <div className="mobile-menu">
      <button
        className="mobile-menu__button"
        type="button"
        onClick={onClick}
        aria-label="Open mobile menu"
      >
        <span className="mobile-menu__button-line" />
        <span className="mobile-menu__button-line" />
        <span className="mobile-menu__button-line" />
      </button>
    </div>
  );
}