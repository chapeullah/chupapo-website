import { useEffect, useState } from 'react';

import './select-dropdown.css';

import CaretIcon from '../icons/caret-icon.jsx';

export default function SelectDropdown({
                                         items,
                                         selectedCode,
                                         onChange,
                                         icon,
                                         ariaLabel,
                                       }) {
  const [isOpen, setIsOpen] = useState(false);

  const currentItem =
    items.find((item) => item.code === selectedCode) ||
    items[0];

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  function handleItemClick(itemCode) {
    onChange(itemCode);
    setIsOpen(false);
  }

  return (
    <div
      className="select-dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="select-dropdown__button"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
      >
        {icon}

        <span className="select-dropdown__title">
          {currentItem.title}
        </span>

        <CaretIcon className="select-dropdown__caret" />
      </button>

      {isOpen && (
        <div className="select-dropdown__menu">
          <div className="select-dropdown__menu-caret" />

          <ul className="select-dropdown__list">
            {items.map((item) => (
              <li className="select-dropdown__item" key={item.code}>
                <button
                  type="button"
                  className={
                    item.code === selectedCode
                      ? 'select-dropdown__option select-dropdown__option--active'
                      : 'select-dropdown__option'
                  }
                  disabled={item.code === selectedCode}
                  onClick={() => handleItemClick(item.code)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}