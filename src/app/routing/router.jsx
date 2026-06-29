import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '@pages/home';
import WorkspacePage from '@pages/workspace';
import BackendPage from '@pages/workspace/outlet/backend';
import FrontendPage from '@pages/workspace/outlet/frontend';
import DevOpsPage from '@pages/workspace/outlet/devops';
import DatabasesPage from '@pages/workspace/outlet/desktop/index.js';
import NotFoundPage from '@pages/not-found';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/workspace" element={<WorkspacePage />}>
          <Route path="backend" element={<BackendPage />} />
          <Route path="frontend" element={<FrontendPage />} />
          <Route path="devops" element={<DevOpsPage />} />
          <Route path="databases" element={<DatabasesPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}