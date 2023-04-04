import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logotype from "../../assets/img/pol_eko_logo_menu/pol-eko-logo-color.png";
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img
            src={logotype}
            alt="logo"
            style={{ maxWidth: "200px", marginTop: "-5px" }}
          />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {/* <Hamburger /> */} icon
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/produkty">Produkty</NavLink>
            </li>
            <li>
              <NavLink to="/projekty">Projekty</NavLink>
            </li>
            <li>
              <NavLink to="/o-nas">O Nas</NavLink>
            </li>
            <li>
              <NavLink className="kontaktButton" to="/kontakt">
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
