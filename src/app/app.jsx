import './styles/reset.css';
import './styles/fonts.css';
import './styles/global.css';

import './styles/shared/card.css';
import './styles/shared/icon.css';
import './styles/shared/section-layout.css';

import './styles/variables/colors.css';
import './styles/variables/sizes.css';
import './styles/variables/transitions.css';

import LanguageProvider from "@i18n/language-provider.jsx";
import ThemeProvider from "@theme/theme-provider.jsx";

import Router from "./routing";

export default function App() {
  return (
    <LanguageProvider >
      <ThemeProvider >
        <Router />
      </ThemeProvider>
    </LanguageProvider>
  );
}