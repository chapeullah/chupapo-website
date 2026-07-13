import LanguageProvider from "./language-provider.jsx";
import ThemeProvider from "./theme-provider.jsx";

export default function Providers({ children }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </LanguageProvider>
  );
}