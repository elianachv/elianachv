import code from "../../assets/code3.png";
import { Link } from "react-router-dom";
import "./About.scss";
function About() {
  const facts = [
    {
      quantity: 2,
      description: "Años de experiencia",
    },
    {
      quantity: 2,
      description: "Proyectos terminados",
    },
    {
      quantity: 4,
      description: "Empresas trabajadas",
    },
  ];
  return (
    <div className="about">
      <h2 className="p-xxl-secondary-600">Sobre mí</h2>
      <h3 className="p-l-default-300 p-center p-cursive">¿Quién soy?</h3>

      <div className="about__container">
        <div className="about__img">
          <img src={code} alt="" srcSet="" />

          <br />
          <div className="button-container-centered">
            <Link to="/cv">
              <button className="button-light emphasis-secondary-light">
                Ver hoja de vida
              </button>
            </Link>
          </div>
        </div>

        <div className="about__text">
          <p className="p-m-default-300 p-justify">
            Mi nombre es Eliana Chávez Valencia. Pero mi familia, amigos y
            compañeros de trabajo me dicen Eli. Soy ingeniera de
            telecomunicaciones. Sin embargo, desde hace 2 años me desempeño como
            desarrolladora de software.
          </p>

          <p className="p-m-default-300 p-justify">
            Soy un alma multipasión. Apasionada por la programación, los
            hábitos, la productividad, la comunicación y el liderazgo.
          </p>
          <div className="data">
            {facts.map((fact) => {
              return (
                <div key={fact.description} className="fact">
                  <div className="p-xxl-main-600">{fact.quantity}+</div>
                  <div className="p-s-default-300 p-center">
                    {fact.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
