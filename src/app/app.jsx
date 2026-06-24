import './styles/reset.css';
import './styles/fonts.css';
import './styles/global.css';
import './styles/shared.css';
import './styles/variables.css';

import LanguageProvider from "@i18n/language-provider.jsx";
import ThemeProvider from "@theme/theme-provider.jsx";

import Header from '@widgets/header/header.jsx';
import Footer from '@widgets/footer/footer.jsx';
import Router from "./routing/index.js";

export default function App() {
  return (
    <LanguageProvider >
      <ThemeProvider >
        <Header />
        <Router />
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  );
}