import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart3, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md transition ${
      isActive ? "bg-emerald-900 text-white" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <nav className="w-full border-b px-4 py-3 flex items-center justify-between shadow-xs">
      {/* Logo */}
      <div className="text-2xl font-bold">
        Keen<span className="text-emerald-900">Keeper</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-2">
        <NavLink to="/" end className={linkClass}>
          <Home size={18} />
          Home
        </NavLink>

        <NavLink to="/timeline" className={linkClass}>
          <Clock size={18} />
          Timeline
        </NavLink>

        <NavLink to="/stats" className={linkClass}>
          <BarChart3 size={18} />
          Stats
        </NavLink>
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        <Menu />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 right-4 bg-white shadow-md rounded-md p-2 flex flex-col gap-2 md:hidden">
          <NavLink
            to="/"
            end
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            <Home size={18} />
            Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            <Clock size={18} />
            Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            <BarChart3 size={18} />
            Stats
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
