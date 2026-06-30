import { Outlet } from "react-router-dom";

import Header from "@widgets/header";
import Footer from "@widgets/footer";

import "./app-layout.css";

export default function AppLayout() {
  return (
    <div className="app-layout">
      <Header />

      <main className="app-layout__main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}