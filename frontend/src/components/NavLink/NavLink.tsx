import "@src/components/NavLink/_NavLink.scss";
import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  path: string;
  name: string;
}

export function NavLink({ path, name }: NavLinkProps) {
  const location = useLocation();

  return (
    <Link
      className={`link ${location.pathname.endsWith(path) ? "active" : ""}`}
      to={path}
    >
      {name}
    </Link>
  );
}
