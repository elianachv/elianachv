import { React, useEffect } from "react";
import ClassList from "classlist";
import "./CV.scss";

function CV() {
  const education = [
    {
      title: "Certified Tech Developer",
      institute: "Digital House",
      type: "Curso",
      date: "Oct 2021 - Actual",
    },
    {
      title: "Diplomado Arquitectura de Software",
      institute: "Universidad EAN",
      type: "Diplomado",
      date: "Jul 2023 - Sep 2023",
    },
    {
      title: "Diplomado Desarrollo FullStack",
      institute: "Bogotá Institute of Technology (BIT)",
      type: "Diplomado",
      date: "Nov 2020 - Feb 2021",
    },
    {
      title: "Ingeniera de Telecomunicaciones",
      institute: "Universidad Santo Tomás",
      type: "Pregado",
      date: "Feb 2015 - Dic 2019",
    },
    {
      title: "Técnico en Asistencia Administrativa",
      institute: "SENA",
      type: "Técnico",
      date: "Ene 2012 - Dic 2014",
    },
  ];

  const work = [
    {
      title: "Desarrolladora Backend",
      company: "Banco Popular Colombia",
      date: "Feb 2022 - Actual",
    },
    {
      title: "Desarrolladora Android",
      company: "Agilpagos",
      date: "Ene 2021 - Dic 2021",
    },
    {
      title: "Desarrolladora Android Junior",
      company: "Solution Systems International SAS",
      date: "Jun 2020 - Dic 2020",
    },
    {
      title: "Promotora",
      company: "Universidad Santo Tomás",
      date: "Ene 2019",
    },
    {
      title: "Practicante Área Servicio al Cliente",
      company: "Coordicargas",
      date: "Abr 2014 - Nov 2014",
    },
  ];

  const selectOption = (option) => {
    const actualTab = new ClassList(document.querySelector(`.tab.active`));
    const actualContent = new ClassList(
      document.querySelector(`.content.active`)
    );

    actualTab.remove("active");
    actualContent.remove("active");

    let tab = new ClassList(document.querySelector(`.tab.${option}`));
    let content = new ClassList(document.querySelector(`#${option}`));

    tab.add("active");
    content.add("active");
  };

  useEffect(() => {
    selectOption("education");
  }, []);

  return (
    <div className="cv page">
      <h1 className="p-xxl-secondary-600 p-center">Hoja de vida</h1> <br />
      <h2 className="p-m-default-400 p-center">Mi trayectoria</h2>
      <div className="cv__container">
        <div className="cv__container-tabs">
          <div
            className="tab education active"
            data-target="#education"
            onClick={() => selectOption("education")}
          >
            <img src="/icons/studies.png" alt="" />
            <p className="p-s-secondary-600">Educación</p>
          </div>
          <div
            className="tab work"
            data-target="#work"
            onClick={() => selectOption("work")}
          >
            <img src="/icons/work.png" alt="" />
            <p className="p-s-secondary-600">Trabajo</p>
          </div>
          <div
            className="tab certificates"
            data-target="#certificates"
            onClick={() => selectOption("certificates")}
          >
            <img src="/icons/certificate.png" alt="" />
            <p className="p-s-secondary-600">Certificaciones</p>
          </div>
          <div
            className="tab skills"
            data-target="#skills"
            onClick={() => selectOption("skills")}
          >
            <img src="/icons/skills.png" alt="" />
            <p className="p-s-secondary-600">Habilidades</p>
          </div>
        </div>

        <div className="cv__container-sections">
          <div className="content education active" data-content id="education">
            {education.map((education) => {
              return (
                <div className="data" key={education.title}>
                  <div className="info">
                    <p className="p-m-main-500">{education.title}</p>
                    <p className="p-s-default-400">{education.institute}</p>
                    <p className="p-xs-secondary-400">{education.date}</p>
                  </div>

                  <div className="timeline">
                    <span className="point" />
                    <span className="line" />
                  </div>

                  <div className="info" />
                </div>
              );
            })}
          </div>

          <div className="content work" data-content id="work">
            {work.map((work) => {
              return (
                <div className="data" key={work.company}>
                  <div className="info">
                    <p className="p-m-main-500">{work.title}</p>
                    <p className="p-s-default-400">{work.company}</p>
                    <p className="p-xs-secondary-400">{work.date}</p>
                  </div>

                  <div className="timeline">
                    <span className="point" />
                    <span className="line" />
                  </div>

                  <div className="info" />
                </div>
              );
            })}
          </div>

          <div className="content certificates" data-content id="certificates">
            <h3 className="p-l-main-600">Certificates</h3>
          </div>

          <div className="content skills" data-content id="skills">
            <h3 className="p-l-main-600">Skills</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
