import './workspace-page.css';

import Header from "@widgets/header/header.jsx";
import SidebarNav from './sidebar-nav';

import { Outlet } from 'react-router-dom';

export default function WorkspacePage() {
  return (
    <div className="workspace">
      <Header className="workspace__header" />
      <main className="workspace__body">
        <SidebarNav />
        <div className="workspace__content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}