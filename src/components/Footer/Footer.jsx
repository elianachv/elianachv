import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { SocialNetworks, Logo } from "../index";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container-info">
          <div className="logo">
            <Logo />
          </div>
          <SocialNetworks />
        </div>
        <div className="footer__container-copyright">
          <p className="p-xxs-default-400 p-white p-center">
            Desarrollando con amor
            <span>
              <AiFillHeart />
            </span>
            Eliana Chavez © 2023{" "}
          </p>
        </div>

        <a href="#menu">
          <div className="up-button">
            <img src="/icons/up.png" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
