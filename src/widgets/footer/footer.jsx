import { Link } from "react-router-dom";

import "./footer.css";

import { getPages } from "./get-pages.js";

import { useLanguage } from "@i18n/use-language.js";
import ChupapoLogo from "@logos/chupapo/chupapo-logo.jsx";
import GitHubLogoOriginal from "@logos/github/github-logo-original.jsx";
import TelegramLogoOriginalMono from "@logos/telegram/telegram-logo-original-mono.jsx";
import MaxLogoOriginalMono from "@logos/max/max-logo-original-mono.jsx";
import { navigation } from "@config/navigation.js";
import { site } from "@config/site.js";
import Button from "@ui/button";

import LanguageSelector from "./language-selector.jsx";
import ThemeSelector from "./theme-selector.jsx";

export default function Footer() {
  const { t } = useLanguage();
  const i18n = t.footer;
  const pages = getPages(i18n);

  return (
    <footer id="footer" className="footer">
      <div className="footer__content">
        <div className="footer__column">
          <Link
            to={navigation.home.to}
            className="footer__logo-container"
          >
            <ChupapoLogo className="footer__logo" />
            <span className="footer__brand">{site.chupapo.brand}</span>
          </Link>

          <div className="footer__links">
            <Button
              href={site.contacts.github.link}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label={site.contacts.github.label}
            >
              <GitHubLogoOriginal className="footer__icon" />
            </Button>

            <Button
              href={site.contacts.telegram.link}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label={site.contacts.telegram.label}
            >
              <TelegramLogoOriginalMono className="footer__icon" />
            </Button>

            <Button
              href={site.contacts.max.link}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label={site.contacts.max.label}
            >
              <MaxLogoOriginalMono className="footer__icon" />
            </Button>
          </div>

          <div className="footer__selectors">
            <LanguageSelector />
            <ThemeSelector />
          </div>

          <p className="footer__copyright">{i18n.copyright}</p>
        </div>

        <div className="footer__column">
          <span className="footer__pages-title">{i18n.pages.title}</span>
          {pages.map((page) => (
            <Button
              key={page.id}
              to={page.to}
              end={page.end}
              variant="ghost"
              className="footer__pages-link"
            >
              {page.name}
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
