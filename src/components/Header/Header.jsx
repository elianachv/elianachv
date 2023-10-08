import { TypedEffect } from "../../hooks/";
import profileImage from "../../assets/profile-img2.png";
import pinkSplash from "../../assets/pink-splash.png";
import "./Header.scss";

function Header() {
  const roles = [
    "Desarrolladora",
    "Ingeniera",
    "Profesora",
    "Mentora",
    "Emprendedora",
  ];

  return (
    <div id="inicio" className="header">
      <div className="header__wrapper">
        <div className="cols cols0">
          <span className="topline">¡Hola!</span>
          <h1>
            Soy <span className="name">Eli</span>
          </h1>
          <br />
          <h1>
            <TypedEffect texts={roles} classes="roles" />
          </h1>
          <p className="phrase hidden">
            La vida se mide en las líneas de código que te dejan sin aliento.{" "}
          </p>
          <p className="phrase">No lo sé todo. Pero me le mido a todo.</p>
          <div className="button-container">
            <a href="/pdf/cv-eliana-chavez.pdf" download>
              <button className="button-light emphasis-secondary-light">
                Descargar CV
              </button>
            </a>

            <a href="#contacto">
              <button className="button-light emphasis-secondary-light">
                Contrátame
              </button>
            </a>
          </div>
        </div>

        <div className="cols cols0">
          <div className="imgbox">
            <img src={pinkSplash} alt="pink-splash" id="pink-splash" />
            <img src={profileImage} alt="profile-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
