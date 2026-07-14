import "./styles/reset.css";
import "./styles/global.css";
import "./styles/scrollbar.css";

import "../shared/styles/card.css";
import "../shared/styles/icon.css";
import "../shared/styles/section-layout.css";

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
