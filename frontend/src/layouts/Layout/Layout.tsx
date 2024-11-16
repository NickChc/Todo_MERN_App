import { Header } from "@src/components/Header";
import "@src/layouts/Layout/_Layout.scss";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main className="main-layout">
      <Header />
      <Outlet />
    </main>
  );
}
