import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import "./Footer.scss";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import Logo from "../Logo/Logo";

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

        <a href="#inicio">
          <div className="up-button">
            <img src="/icons/up.png" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
