import './workspace-page.css';

import Header from "@widgets/header/header.jsx";
import SidebarNav from './sidebar-nav';
import WorkspaceContent from './workspace-content';

export default function WorkspacePage() {
  return (
    <div className="workspace">
      <Header className="workspace__header" />

      <main className="workspace__body">
        <SidebarNav />
        <WorkspaceContent />
      </main>
    </div>
  );
}