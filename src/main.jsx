import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@styles/reset.css';
import '@styles/fonts.css';
import '@styles/global.css';
import '@styles/shared.css';

import App from './app/app.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);