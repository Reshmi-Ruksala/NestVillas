import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          Nest<span>Villas</span>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/cozy-nest" className="nav-link">
            Cozy Nest
          </NavLink>
          <NavLink to="/mangrove-nest" className="nav-link">
            Mangrove Nest
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
