import "@src/components/Header/_Header.scss";
import { NavLink } from "@src/components/NavLink";

export function Header() {
  return (
    <header className="main-header">
      <nav>
        <NavLink path="/" name="ALL" />
        <NavLink path="/active" name="ACTIVE" />
        <NavLink path="/done" name="DONE" />
      </nav>

      <hr />
    </header>
  );
}
