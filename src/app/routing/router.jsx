import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '@layouts/app-layout.jsx';

import HomePage from '@pages/home';
import NotFoundPage from '@pages/not-found';
import ContactPage from '@pages/contact';
import AboutPage from '@pages/about';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}