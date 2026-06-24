import './app.css';

import LanguageProvider from "@i18n/language-provider.jsx";
import ThemeProvider from "@theme/theme-provider.jsx";

import Header from '../widgets/header/header.jsx';
import Homepage from '@pages/homepage/homepage.jsx';
import Footer from '../widgets/footer/footer.jsx';

export default function App() {
  return (
    <LanguageProvider >
      <ThemeProvider >
        <Header />
        <Homepage />
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  );
}