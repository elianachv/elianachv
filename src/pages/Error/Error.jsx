import React from "react";
import "./Error.scss";
import profileImage from "../../assets/profile-img2.png";

function Error() {
  return (
    <div className="page error">
      <p className="p-xxl-secondary-600 p-center">
        Ups! <br /> La página que buscas no está disponible
      </p>
      <br />
      <br />

      <img src={profileImage} alt="profile-img" />
    </div>
  );
}

export default Error;
