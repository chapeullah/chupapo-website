import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "@layouts";
import { navigation } from "@config/navigation.js";

const HomePage = lazy(() => import("@pages/home"));
const NotFoundPage = lazy(() => import("@pages/not-found"));
const AboutPage = lazy(() => import("@pages/about"));
const ContactsPage = lazy(() => import("@pages/contacts"));
const ProjectsPage = lazy(() => import("@pages/projects"));

function LazyPage({ component: Page }) {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<LazyPage component={HomePage} />} />
          <Route
            path={navigation.about.to}
            element={<LazyPage component={AboutPage} />}
          />
          <Route
            path={navigation.contacts.to}
            element={<LazyPage component={ContactsPage} />}
          />
          <Route
            path={navigation.projects.to}
            element={<LazyPage component={ProjectsPage} />}
          />
        </Route>

        <Route
          path="*"
          element={<LazyPage component={NotFoundPage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
