import React, { useState, useEffect } from "react";
import { BsFiletypeDoc } from "react-icons/bs";
import { MdFiberNew } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { VscCode } from "react-icons/vsc";

import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./Services.scss";

function Services() {
  const services = [
    {
      name: "Desarrollo",
      description:
        "Mi fuerte es el backend con Java. Sin embargo me caracterizo por aprender rápido y mi disposión para ayudarte en lo que necesites.",
      tasks: [
        "Diseño, análisis, implementación y mantenimiento de REST APIS en Java y Js",
        "Desarrollo y mantenimiento de aplicaciones nativas Android",
      ],
      notes: [],
      icon: <VscCode className="p-xxl-secondary-400" />,
      new: false,
      active: true,
      priceInfo: null,
    },
    {
      name: "Documentación",
      description:
        "La parte aburrida y tediosa que casi ningún desarrollador disfruta, pero que es fundamental, la hago con gusto por ti.",
      tasks: [
        "Documentación de REST APIS con swagger",
        "Documentación sencilla de aplicativos con markdown (archivos README.md)",
        "Redacción de manual de usuario",
        "Propuesta de wikis internas",
      ],
      notes: [],
      icon: <BsFiletypeDoc className="p-xxl-secondary-400" />,
      new: true,
      active: true,
      priceInfo: null,
    },
    {
      name: "Tutoría",
      description: "",
      tasks: [
        "Clases personalizadas de programación (Java)",
        "Resolución de dudas",
        "Acompañamiento y consultoría para proyectos universitarios",
      ],
      notes: [
        "NO realizo trabajos a demanda, hago acompañamiento para garatizar que aprendas",
      ],
      icon: <LiaChalkboardTeacherSolid className="p-xxl-secondary-400" />,
      new: false,
      active: true,
      priceInfo: null,
    },
    {
      name: "Mentoría",
      description: "",
      tasks: [],
      notes: [],
      icon: <BsFiletypeDoc className="p-xxl-secondary-400" />,
      new: true,
      active: false,
      priceInfo: null,
    },
    {
      name: "Locución",
      description: "",
      tasks: [],
      notes: [],
      icon: <BsFiletypeDoc className="p-xxl-complementary-400" />,
      new: true,
      active: false,
      priceInfo: null,
    },

  ];
  const [serviceSelected, setServiceSelected] = useState({});
  const [showModal, setShowModal] = useState(false);
  const selectService = (service) => {
    setServiceSelected(service);
    changeModalVisibility();
  };

  const changeModalVisibility = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="services">
      <h2 className="p-xxl-secondary-600 p-center">Servicios</h2>
      <h3 className="p-l-default-300 p-center p-cursive">¿Cómo puedo ayudarte?</h3>
      <div className="services__container">
        {services
          .filter((service) => service.active)
          .map((service) => {
            return (
              <article key={service.name}>
                {service.icon}
                {service.new ? (
                  <MdFiberNew className="new p-xxl-secondary-400" />
                ) : null}
                <p className="p-m-complementary-500">{service.name}</p>
                <button
                  className="button-secondary-light emphasis-light"
                  onClick={() => selectService(service)}
                >
                  Saber más
                </button>
              </article>
            );
          })}
      </div>
      {showModal ? (
        <ServiceDetail
          service={serviceSelected}
          setShowModal={changeModalVisibility}
        />
      ) : null}
      ;
    </div>
  );
}

export default Services;
