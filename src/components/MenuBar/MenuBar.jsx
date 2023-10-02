import { GiHamburgerMenu } from "react-icons/gi";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import "./MenuBar.scss";
import Logo from "../Logo/Logo";

function MenuBar() {
  return (
    <nav className="menuBar">
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
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Hoja de vida</a>
        </li>
        <li>
          <a href="#">Portafolio</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>

      <div className="menuBar__socialNetworks">
        <SocialNetworks />
      </div>
    </nav>
  );
}

export default MenuBar;
