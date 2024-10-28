import { NavLink } from "@src/components/NavLink";
import "@src/layouts/Layout/_Layout.scss";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main className="main-layout">
      <header>
        <nav>
          <NavLink path="/" name="ALL" />
          <NavLink path="/active" name="ACTIVE" />
          <NavLink path="/done" name="DONE" />
        </nav>

        <hr />
      </header>
      <Outlet />
    </main>
  );
}
