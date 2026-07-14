import "./contact-card.css";

import ClipboardIcon from "@icons/clipboard/clipboard-icon.jsx";
import CheckmarkIcon from "@icons/checkmark/checkmark-icon.jsx";

import { useCopyToClipboard } from "@lib/clipboard";

export default function ContactCard({ contact }) {
  const { name, value, description, Icon, href } = contact;

  const opensInNewTab = href.startsWith("http");

  const { copied, copy } = useCopyToClipboard();

  function handleCopy(event) {
    event.stopPropagation();
    void copy(value);
  }

  return (
    <article className="contact-card">
      <a
        className="contact-card__link"
        href={href}
        target={opensInNewTab ? "_blank" : undefined}
        rel={opensInNewTab ? "noreferrer noopener" : undefined}
      />
      <div className="contact-card__media">
        {Icon && <Icon className="contact-card__icon" />}
      </div>
      <div className="contact-card__content">
        <div className="contact-card__header">
          <h3 className="contact-card__title">{name}</h3>
          {value != null && (
            <button
              className={`contact-card__copy-button ${
                copied ? "contact-card__copy-button--copied" : ""
              }`}
              type="button"
              onClick={handleCopy}
              aria-label={copied ? "Copied" : `Copy ${value}`}
            >
              <span className="contact-card__value">{value}</span>

              <span className="contact-card__copy-icon" aria-hidden="true">
                <ClipboardIcon className="contact-card__clipboard-icon" />
                <CheckmarkIcon className="contact-card__checkmark-icon" />
              </span>
            </button>
          )}
        </div>
        <p className="contact-card__description">{description}</p>
      </div>
    </article>
  );
}
