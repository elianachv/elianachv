import React from "react";
import "./FrontPage.scss";
import TypeEffect from "../../hooks/TypedEffect/TypedEffect";

function FrontPage() {
  const roles = ["Desarrolladora Backend", "Mentora", "Profesora", "Escritora"];

  return (
    <div className="frontPage">
      <img
        className="frontPage--image"
        src="https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg"
        alt="profile-image"
      ></img>

      <h1>
        <br />
        Soy <span className="frontPage--name">Eli</span>
      </h1>
      <div className="frontPage__roles">
        <TypeEffect texts={roles} classes="frontPage__roles"/>
      </div>
    </div>
  );
}

export default FrontPage;
