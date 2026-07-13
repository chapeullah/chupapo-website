import './footer.css';
import LanguageSelector from './language-selector/language-selector.jsx';
import ThemeSelector from './theme-selector/theme-selector.jsx';
import { useLanguage } from '@i18n/use-language.js';
import ChupapoLogo from '@logos/chupapo/chupapo-logo.jsx';
import { site } from '@i18n/site.js';
import GitHubLogoOriginal from '@logos/github/github-logo-original.jsx';
import Button from '@ui/button/index.js';
import TelegramLogoOriginalMono from '@logos/telegram/telegram-logo-original-mono.jsx';
import MaxLogoOriginalMono from '@logos/max/max-logo-original-mono.jsx';
import { getPages } from '@widgets/footer/get-pages.jsx';

export default function Footer() {
    const { t } = useLanguage();
    const i18n = t.footer;

    const pages = getPages(i18n);

    return (
      <footer id="footer" className="footer">
        <div className={"footer__content"}>
          <div className={"footer__column"}>
            <a href={"/"} className={"footer__logo-container"}>
              <ChupapoLogo className="footer__logo" />
              <h1 className={"footer__brand"}>{site.chupapo.brand}</h1>
            </a>
            <div className={"footer__links"}>
              <Button
                href={site.contacts.github.link}
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
                className={"footer__link"}
              >
                <GitHubLogoOriginal className="footer__icon" />
              </Button>
              <Button
                href={site.contacts.telegram.link}
                variant={"ghost"}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={"footer__link"}
              >
                <TelegramLogoOriginalMono className="footer__icon" />
              </Button>
              <Button
                href={site.contacts.max.link}
                variant={"ghost"}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={"footer__link"}
              >
                <MaxLogoOriginalMono className="footer__icon" />
              </Button>
            </div>
            <div className="footer__selectors">
              <LanguageSelector />
              <ThemeSelector />
            </div>
            <p className='footer__copyright'>{i18n.copyright}</p>
          </div>
          <div className={"footer__column"}>
            <span className="footer__pages-title">{i18n.pages.title}</span>
            {pages.map((page) => (
              <Button key={page.id} href={page.link} variant="ghost" className="footer__pages-link">{page.name}</Button>
            ))}
          </div>
        </div>
      </footer>
    );
  }