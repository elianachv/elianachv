import { GiHamburgerMenu } from "react-icons/gi";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import { Link, NavLink } from "react-router-dom";
import "./MenuBar.scss";
import Logo from "../Logo/Logo";

function MenuBar() {
  return (
    <nav id="menu" className="menuBar">
      <input type="checkbox" id="mobileCheck" />

      <div className="menuBar__logo">
        <Logo />
        <div className="mobile">
          <label htmlFor="mobileCheck">
            <GiHamburgerMenu className="mobile-icono" />
          </label>
        </div>
      </div>

      <ul className="menuBar__options">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/cv">Hoja de Vida</NavLink>
        </li>
        <li>
          <NavLink to="/portafolio">Portafolio</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>

      <div className="menuBar__socialNetworks">
        <SocialNetworks />
      </div>
    </nav>
  );
}

export default MenuBar;
