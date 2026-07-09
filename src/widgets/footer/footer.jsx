import './footer.css';
import LanguageSelector from './language-selector/language-selector.jsx';
import ThemeSelector from './theme-selector/theme-selector.jsx';
import Divider from '@ui/divider/divider.jsx';
import { useLanguage } from '@i18n/use-language.js';

export default function Footer() {
    const { t } = useLanguage();
    const i18n = t.footer;

    return (
      <>
        <Divider />
        <footer id="footer" className="footer">
          <div className="footer__left">
            <LanguageSelector />
            <ThemeSelector />
          </div>
          <div className='footer__right'>
            <p className='footer__copyright'>
              {i18n.copyright}
            </p>
          </div>
        </footer>
      </>
    );
  }