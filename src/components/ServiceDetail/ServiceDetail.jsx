import React from "react";
import "./ServiceDetail.scss";

function ServiceDetail({ service, setShowModal }) {
  return (
    <div className="serviceDetail modal-container">
      <div className="serviceDetail__container">
        <h1 className="p-l-secondary-600 p-center"> {service.name}</h1> <br />
        <p className="p-m-default-400 p-center">{service.description}</p> <br />
        <br />
        <ul>
          {service.tasks.map((task) => {
            return (
              <li>
                <p className="p-m-default-300">{task}</p>
              </li>
            );
          })}
        </ul>
        <br />
        <br />
        <ul>
          {service.notes.map((note) => {
            return (
              <p className="p-m-default-500 p-error p-center">Nota: {note}</p>
            );
          })}
        </ul>
        <button className="modal-close-button" onClick={setShowModal}>
          X
        </button>
      </div>
    </div>
  );
}

export default ServiceDetail;
