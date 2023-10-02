import { React, useState } from "react";
import "./Values.scss";

function Values() {
  const acrostic = [
    {
      letter: "E",
      value: "Excelencia",
      icon: "/icons/excelence.png",
      phrase:
        "En cuanto a mí, estoy en busca de la excelencia. No tengo tiempo para envejecer.  -  Will Eisner",
      description:
        "No tenemos tiempo para hacer demasiadas cosas por esa cada cosa que hacemos debería ser excelente. Me gusta el trabajo bien hecho, me esforzaré al máximo para garantizarte siempre un trabajo de calidad, que se adecue a tus necesidades y se alinee con tu propósito",
    },
    {
      letter: "L",
      value: "Liderazgo",
      icon: "/icons/leadership.png",
      phrase:
        "Un líder es alguien que conoce el camino, recorre el camino y muestra el camino. - John Maxwell",
      description:
        "El liderazgo es mucho más que dirigir equipos. Me encargaré de tomar la iniciativa y guiarte en lo que necesites. Juntos haremos que suceda lo que deseas. ",
    },
    {
      letter: "I",
      value: "Integridad",
      icon: "/icons/integrity.png",
      phrase:
        " La grandeza de un hombre no se mide por las riquezas que adquiere, sino por su integridad y su habilidad de afectar positivamente aquellos que le rodean. - Bob Marley",
      description:
        "Uno de mis más grandes propósitos es precisamente afectar positivamente la vida de quienes me rodean. Quiero sinceramente ayudarte. Mi trabajo se caracteriza por ser honesto y mi trato contigo siempre transparente.",
    },
  ];

  const [selectedValue, setSelectedValue] = useState(acrostic[0]);
  return (
    <div className="values">
      <h2 className="p-xxl-secondary-600 p-center">Valores</h2>
      <h3 className="p-l-default-300 p-center p-cursive">
        ¿Cómo hago las cosas?
      </h3>
      <br />
      <br />
      <p className="info p-m-default-400 p-center">
        Clic en cada letra para <br />
        <span className="p-font-code">verDetalles()</span>
      </p>
      <div className="values__container">
        <div className="values__container-acrostic">
          {acrostic.map((value) => {
            return (
              <div key={value.letter}>
                <p className="p-l-default-400">
                  <span
                    className="letter p-xxl-main-600 p-font-main"
                    onClick={() => setSelectedValue(value)}
                  >
                    {value.value.substring(0, 1)}
                  </span>
                  <span className="value p-l-default-400">
                    {value.value.slice(1)}
                  </span>
                  <span
                    className="code p-s-default-400 p-font-code"
                    onClick={() => setSelectedValue(value)}
                  >
                    {" "}
                    verDetalles()
                  </span>
                </p>
              </div>
            );
          })}
        </div>
        <div className="values__container-details">
          <p className="p-xl-main-600 p-font-code p-center p-bold">
            verDetalles(
            <span className="p-font-code p-secondary">
              {selectedValue.value}
            </span>
            )
          </p>
          <div>
            <img src={selectedValue.icon} alt={selectedValue.value + "-icon"} />
            <p className="p-m-default-400 p-font-main p-cursive">
              {selectedValue.phrase}
            </p>
          </div>
          <p className="p-m-default-400 p-justify">
            {selectedValue.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;
