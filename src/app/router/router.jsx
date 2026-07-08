import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '../app-layout';

import HomePage from '@pages/home';
import NotFoundPage from '@pages/not-found';
import ContactPage from '@pages/contact';
import AboutPage from '@pages/about';
import ProjectsPage from '@pages/projects/projects-page.jsx';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}