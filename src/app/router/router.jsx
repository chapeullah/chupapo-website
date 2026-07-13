import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "@layouts";

import HomePage from "@pages/home";
import NotFoundPage from "@pages/not-found";
import AboutPage from "@pages/about";
import ContactsPage from "@pages/contacts";
import ProjectsPage from "@pages/projects";
import { navigation } from "@config/navigation.js";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={navigation.about.to} element={<AboutPage />} />
          <Route path={navigation.contacts.to} element={<ContactsPage />} />
          <Route path={navigation.projects.to} element={<ProjectsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
