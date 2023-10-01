import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container-info">
          <div className="logo">
            <div id="logo">
              {`<`} Eli <span>{` {dev} `}</span> {`/>`}
            </div>
          </div>
          <div className="socialnetworks">
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
      </div>
    </div>
  );
}

export default Footer;
