import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
    <Link to="/" className="title">
      Website
    </Link>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/servicos">Serviços</NavLink>
      </li>
      <li>
        <NavLink to="/contato">Contato</NavLink>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;