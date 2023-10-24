import { React, useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";

import "./Portafolio.scss";

function Portafolio() {
  const projects = [
    {
      name: "Landing page empresarial",
      description:
        "Página web estática para mostrar la información general de una compañía",
      tech: ["html", "css", "js"],
      url: "https://elianachv.github.io/manage/",
      github: "https://github.com/elianachv/manage",
      img: "/img/projects/manage.png",
      category: "Front",
    },
    {
      name: "Landing page veterinaria",
      description:
        "Página web estática para mostrar la información general de una veterinaria",
      tech: ["html", "css", "js"],
      url: "https://elianachv.github.io/petshop/",
      github: "https://github.com/elianachv/petshop",
      img: "/img/projects/petshop.png",
      category: "Front",
    },
    {
      name: "Redimensión de imagenes",
      description:
        "Api que permite la carga de una imagen y calcula el tamaño ideal para que ajuste en una hoja A4",
      tech: ["nodejs"],
      url: "https://a4resizeimg.onrender.com/ui",
      github: "https://elianachv.github.io/a4resizeimg",
      img: "/img/projects/a4.png",
      category: "Back",
    },
    {
      name: "API Rest de un hotel",
      description:
        "Api rest para la gestión de reservas y registro de clientes de un hotel",
      tech: ["java", "springboot", "mysql"],
      url: "https://elianachv.github.io/api-myhotel/",
      github: "https://github.com/elianachv/api-myhotel",
      img: "/img/projects/api-hotel.png",
      category: "Back",
    },
    {
      name: "Ethicos",
      description:
        "Aplicativo web de Ethicos. Un directorio de personas confiables",
      tech: ["react"],
      url: "https://ethicos.com.co/",
      github: "",
      img: "/img/projects/ethicos.png",
      category: "Front",
    },
    {
      name: "Directorio de dentistas",
      description:
        "Página web para visualizar un catálogo de dentistas y seleccionar los favoritos",
      tech: ["react"],
      url: "https://dentist-catalog.onrender.com/home",
      github: "https://github.com/elianachv/final-frontend",
      img: "/img/projects/dentists.png",
      category: "Front",
    },
    {
      name: "Tienda de instrumentos",
      description:
        "Aplicativo web para reservar instrumentos. Trabajo final en grupo carrera CTD",
      tech: ["react", "springboot"],
      url: "https://www.youtube.com/watch?v=yMurzOmFi38",
      github: "",
      img: "/img/projects/instrumentos.png",
      category: "Back",
    },
  ];

  const recommended = [
    {
      name: "Ethicos",
      description:
        "Aplicativo web de Ethicos. Un directorio de personas confiables",
      tech: ["react"],
      url: "https://ethicos.com.co/",
      github: "",
      img: "/img/projects/ethicos.png",
      category: "Front",
    },
    {
      name: "API Rest de un hotel",
      description:
        "Api rest para la gestión de reservas y registro de clientes de un hotel",
      tech: ["java", "springboot", "mysql"],
      url: "https://elianachv.github.io/api-myhotel/",
      github: "https://github.com/elianachv/api-myhotel",
      img: "/img/projects/api-hotel.png",
      category: "Back",
    },
  ];

  const categories = ["front", "back", "mobile"];

  // "devops", "documentación"

  const [querie, setQuerie] = useState("");
  const [result, setResult] = useState(projects);
  const [filtered, setFiltered] = useState(categories);

  const filter = (category, tag) => {
    let filter = projects;

    if (category) {
      filter = filter.filter((p) => {
        return p.category.toLowerCase() === category;
      });
    }

    if (tag) {
      filter = filter.filter((p) => {
        return p.tech.includes === tag;
      });
    }

    document.getElementById("form").reset();
    setResult(filter);
  };

  useEffect(() => {
    setResult(
      projects.filter((p) => {
        return filtered.includes(p.category.toLowerCase());
      })
    );
    document.getElementById("form").reset();
  }, [filtered]);

  const search = (e) => {
    e.preventDefault();
    if (querie && querie !== "") {
      setResult(
        projects.filter((p) => {
          return (
            p.name.toLowerCase().includes(querie) ||
            p.description.toLowerCase().includes(querie) ||
            p.tech.includes(querie) ||
            p.category.toLowerCase().includes(querie)
          );
        })
      );
    } else {
      setResult(projects);
    }
  };

  return (
    <div className="page portafolio">
      <h1 className="p-xxl-secondary-600 p-center">Portafolio</h1> <br />
      <div className="portafolio__container">
        <div className="portafolio__container-searcher">
          <form id="form" onSubmit={(e) => search(e)}>
            <input
              type="text"
              onChange={(e) => setQuerie(e.target.value.toLowerCase())}
            />
            <button className="button">Buscar</button>
          </form>
        </div>

        <div className="portafolio__container-data">
          <div className="filter">
            <div className="categories">
              {categories.map((c) => {
                return (
                  <div>
                    <label
                      className="p-m-default-400 p-capitalized checkbox"
                      htmlFor={c}
                    >
                      <input
                        type="checkbox"
                        name={c}
                        id={c}
                        value={c}
                        defaultChecked 
                        onChange={(e) => {
                          e.target.checked
                            ? setFiltered([...filtered, c])
                            : setFiltered(
                                filtered.filter((c) => c != e.target.value)
                              );
                        }}
                      />
                      <span className="check"></span> {c}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="projects">
            {result.length > 0 ? (
              result.map((project) => {
                return (
                  <div className="project" key={project.name}>
                    <div className="info">
                      <span className="category p-xs-default-400">
                        {project.category}
                      </span>

                      {project.github ? (
                        <a href={project.github} target="_blank">
                          <BsGithub className="icon" />
                        </a>
                      ) : null}
                    </div>
                    <a href={project.url} target="_blank">
                      <img src={project.img} alt={project.name} />
                    </a>
                    <p className="p-m-main-600">
                      {project.name.substring(0, 35)}
                    </p>
                    <br />
                    <p className="p-s-default-400 description">
                      {project.description.substring(0, 95)}
                    </p>

                    <div className="tags">
                      {project.tech.map((t) => {
                        return (
                          <span className="p-xs-default-400" key={t}>
                            {t}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="no-result">
                <div className="message">
                  <p className="p-m-default-400">
                    No tengo ningún proyecto relacionado. Intenta con otro
                    criterio de búsqueda o explora las categorías
                  </p>
                </div>
                <br />

                <p className="p-l-secondary-600">Te puede interesar</p>
                <br />
                <div className="recommended">
                  {recommended.map((project) => {
                    return (
                      <div
                        className="project"
                        href={project.url}
                        target="_blank"
                        key={project.name}
                      >
                        <div className="info">
                          <span className="category p-xs-default-400">
                            {project.category}
                          </span>

                          <a href={project.github} target="_blank">
                            <BsGithub className="icon" />
                          </a>
                        </div>
                        <img src={project.img} alt={project.name} />
                        <p className="p-m-main-600">{project.name}</p>
                        <br />
                        <p className="p-s-default-400">{project.description}</p>

                        <div className="tags">
                          {project.tech.map((t) => {
                            return (
                              <span className="p-xs-default-400" key={t}>
                                {t}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <br />
                <button
                  className="button-secondary-light"
                  onClick={() => filter()}
                >
                  Ver todos los proyectos
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portafolio;
