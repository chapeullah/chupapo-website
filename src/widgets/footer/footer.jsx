  import './footer.css';
  import LanguageSelector from './language-selector/language-selector.jsx';
  import ThemeSelector from "./theme-selector/theme-selector.jsx";
  import Divider from "@ui/divider/divider.jsx";

  export default function Footer() {
    return (
      <footer id="footer" className="footer">
        <Divider />

        <div className="footer__left">
          <LanguageSelector />
          <ThemeSelector />
        </div>

        <div className='footer__right'>
          <p className='footer__copyright'>
            &copy; 2026 CHUPAPO SYSTEMS. Все права защищены.
          </p>
        </div>
      </footer>
    );
  }