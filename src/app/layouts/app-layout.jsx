import { Outlet } from "react-router-dom";

import Header from "@widgets/header/Header";
import Footer from "@widgets/footer/footer.jsx";

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