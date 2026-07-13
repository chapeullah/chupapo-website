import "./styles/reset.css";
import "./styles/global.css";
import "./styles/scrollbar.css";

import "./styles/shared/card.css";
import "./styles/shared/icon.css";
import "./styles/shared/section-layout.css";

import "./styles/variables/colors.css";
import "./styles/variables/sizes.css";
import "./styles/variables/transitions.css";

import Router from "./router";
import Providers from "./providers";

export default function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}