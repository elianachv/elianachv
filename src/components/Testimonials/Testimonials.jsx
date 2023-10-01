import React from "react";
import "./Testimonials.scss";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alejandro Villalobos",
      charge: "Product Owner Captación Digital - Banco Popular",
      testimonial: "Excelente",
    },
    {
      name: "Andres Salazar",
      charge: "CEO - Grupo Mirai",
      testimonial: "Excelente",
    },
    {
      name: "Nicolas Salinas",
      charge: "CEO - Ethicos",
      testimonial: "Excelente",
    },
  ];
  return (
    <div className="enterprises">
      <br />
      <div className="testimonials__container">
        <div className="testimonials__container-intro">
          <h2 className="p-xxl-secondary-600 p-center">Testimonios</h2>
          <h3 className="p-l-default-300 p-center p-cursive">
            Lo que se dice de mí
          </h3>
        </div>

        <div className="testimonials__container-details">
          {testimonials.map((t) => {
            return (
              <div>
                <img src="/icons/quote.png" alt="quote-icon" />
                <p className="p-m-main-600 p-center">{t.name}</p>
                <p className="p-s-secondary-600 p-center">{t.charge}</p>
                <p className="p-s-default-400 p-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, nesciunt excepturi! Illo inventore debitis sint
                  quisquam aspernatur? Ducimus voluptate voluptas natus ipsum
                  fugiat? Aspernatur cupiditate a quia explicabo nemo at!
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
