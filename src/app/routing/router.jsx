import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '@pages/home';
import NotFoundPage from '@pages/not-found';
import FeaturesPage from "@pages/features";
import WorkspacePage from "@pages/workspace";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}