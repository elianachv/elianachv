import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import "./MenuBar.scss";

function MenuBar() {
  return (
    <nav className="menuBar">
      <input type="checkbox" id="mobileCheck" />

      <div className="menuBar__logo">
        <div id="logo">
          {`<`} Eli <span>{` {dev} `}</span> {`/>`}
        </div>
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
        <a href="http://www.instagram.com/_elianachv" target="_blank">
          <BsInstagram className="icon" />
        </a>
        <a href="http://www.linkedin.com/elianachv" target="_blank">
          <BsLinkedin className="icon" />
        </a>
        <a href="http://www.github.com/elianachv" target="_blank">
          <BsGithub className="icon" />
        </a>
      </div>
    </nav>
  );
}

export default MenuBar;
