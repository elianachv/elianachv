import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import "./SocialNetworks.scss";

function SocialNetworks() {
  return (
    <div className="socialnetworks">
      <a href="http://www.instagram.com/_elianachv" target="_blank">
        <BsInstagram className="icon" />
      </a>
      <a href="http://www.linkedin.com/in/elianachv" target="_blank">
        <BsLinkedin className="icon" />
      </a>
      <a href="http://www.github.com/elianachv" target="_blank">
        <BsGithub className="icon" />
      </a>
    </div>
  );
}

export default SocialNetworks;
