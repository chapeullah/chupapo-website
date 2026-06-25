import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '@pages/home';
import NotFoundPage from '@pages/not-found';
import FeaturesPage from "@pages/features/feature-page.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}