import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '@pages/home';
import NotFoundPage from '@pages/not-found';
import WorkspacePage from '@pages/workspace';
import ContactForm from '@pages/contact-form';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}