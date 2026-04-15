import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${
    isActive
      ? "bg-blue-700 text-white"
      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  }`;

export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Community Health Services</h1>
          <p className="text-sm text-slate-600">Accessible appointment booking system</p>
        </div>

        <nav aria-label="Main navigation" className="flex flex-wrap gap-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/book" className={linkClass}>
            Book Appointment
          </NavLink>
          <NavLink to="/accessibility" className={linkClass}>
            Accessibility Help
          </NavLink>
        </nav>
      </div>
    </header>
  );
}