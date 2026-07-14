import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import "./mobile-menu.css";
import ContactIcon from "@icons/contact/contact-icon.jsx";
import InfoIcon from "@icons/info/info-icon.jsx";
import HomeIcon from "@icons/home/home-icon.jsx";
import GitHubLogo from "@logos/github/github-logo.jsx";
import Divider from "@ui/divider";
import { useLanguage } from "@i18n/use-language.js";
import { navigation } from "@config/navigation.js";
import { site } from "@config/site.js";

const DesktopMediaQuery = "(min-width: 1025px)";
const MenuId = "mobile-navigation";
const FocusableSelector = "a[href], button:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";

export default function MobileMenu() {
  const { t } = useLanguage();
  const i18n = t.header;

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  const restoreTriggerFocus = () => {
    requestAnimationFrame(() => {
      triggerRef.current?.focus({ preventScroll: true });
    });
  };

  const closeMenu = ({ restoreFocus = false } = {}) => {
    setIsOpen(false);

    if (restoreFocus) {
      restoreTriggerFocus();
    }
  };

  const handleMenuToggle = () => {
    if (isOpen) {
      closeMenu({ restoreFocus: true });
      return;
    }

    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = requestAnimationFrame(() => {
      panelRef.current?.querySelector(FocusableSelector)?.focus();
    });

    const closeAndRestoreFocus = () => {
      setIsOpen(false);
      requestAnimationFrame(() => {
        triggerRef.current?.focus({ preventScroll: true });
      });
    };

    const handlePointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        closeAndRestoreFocus();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeAndRestoreFocus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = Array.from(
        menuRef.current?.querySelectorAll(FocusableSelector) ?? [],
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const desktopMedia = window.matchMedia(DesktopMediaQuery);
    const handleDesktopChange = ({ matches }) => {
      if (matches) setIsOpen(false);
    };

    desktopMedia.addEventListener("change", handleDesktopChange);

    return () => {
      desktopMedia.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  const getLinkClassName = ({ isActive }) =>
    `mobile-menu__link ${isActive ? "mobile-menu__link--selected" : ""}`;

  return (
    <div ref={menuRef} className="mobile-menu">
      <button
        ref={triggerRef}
        className={`mobile-menu__button ${
          isOpen ? "mobile-menu__button--open" : ""
        }`}
        type="button"
        onClick={handleMenuToggle}
        aria-label={isOpen ? i18n.menu.close : i18n.menu.open}
        aria-controls={MenuId}
        aria-expanded={isOpen}
      >
        <span className="mobile-menu__button-line" />
        <span className="mobile-menu__button-line" />
        <span className="mobile-menu__button-line" />
      </button>

      <nav
        ref={panelRef}
        id={MenuId}
        className={`mobile-menu__content ${
          isOpen ? "mobile-menu__content--open" : ""
        }`}
        aria-label={i18n.menu.label}
        aria-hidden={!isOpen}
      >
        <NavLink
          to={navigation.home.to}
          end={navigation.home.end}
          className={getLinkClassName}
          onClick={() => closeMenu()}
        >
          <HomeIcon className="mobile-menu__link-icon" />
          <span className="mobile-menu__link-label">{i18n.home}</span>
        </NavLink>

        <NavLink
          to={navigation.projects.to}
          className={getLinkClassName}
          onClick={() => closeMenu()}
        >
          <InfoIcon className="mobile-menu__link-icon" />
          <span className="mobile-menu__link-label">{i18n.projects}</span>
        </NavLink>

        <NavLink
          to={navigation.about.to}
          className={getLinkClassName}
          onClick={() => closeMenu()}
        >
          <InfoIcon className="mobile-menu__link-icon" />
          <span className="mobile-menu__link-label">{i18n.about}</span>
        </NavLink>

        <Divider />

        <a
          href={site.contacts.github.link}
          className="mobile-menu__link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => closeMenu()}
        >
          <GitHubLogo className="mobile-menu__link-icon" />
          <span className="mobile-menu__link-label">
            {site.contacts.github.label}
          </span>
        </a>

        <NavLink
          to={navigation.contacts.to}
          className={getLinkClassName}
          onClick={() => closeMenu()}
        >
          <ContactIcon className="mobile-menu__link-icon" />
          <span className="mobile-menu__link-label">{i18n.contacts}</span>
        </NavLink>
      </nav>
    </div>
  );
}
