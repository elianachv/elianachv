import { React, useEffect } from "react";
import ClassList from "classlist";
import { IoIosArrowDown } from "react-icons/io";
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

  const skills = [
    {
      type: "Desarrollo",
      icon: "/img/dev.png",
      experience: "2 años de experiencia",
      tech: [
        {
          name: "Git",
          level: 60,
          icon: "/img/git.png",
        },
        {
          name: "SQL",
          level: 60,
          icon: "/img/sql.png",
        },
        {
          name: "Swagger",
          level: 70,
          icon: "/img/swagger.png",
        },
      ],
    },
    {
      type: "Backend",
      icon: "/img/back.png",
      experience: "2 años de experiencia",
      tech: [
        {
          name: "Java",
          level: 75,
          icon: "/img/java.png",
        },
        {
          name: "Spring Boot",
          level: 60,
          icon: "/img/spring.png",
        },
        {
          name: "NodeJS",
          level: 60,
          icon: "/img/nodejs.png",
        },
        {
          name: "Python",
          level: 30,
          icon: "/img/python.png",
        },
        {
          name: "Firebase",
          level: 45,
          icon: "/img/firebase.png",
        },
      ],
    },
    {
      type: "Frotend",
      icon: "/img/front.png",
      experience: "1 año de experiencia",
      tech: [
        {
          name: "HTML",
          level: 50,
          icon: "/img/html.png",
        },
        {
          name: "CSS",
          level: 50,
          icon: "/img/css.png",
        },
        {
          name: "SASS",
          level: 45,
          icon: "/img/sass.png",
        },
        {
          name: "JS",
          level: 50,
          icon: "/img/js.png",
        },
        {
          name: "React",
          level: 50,
          icon: "/img/react.png",
        },
        {
          name: "Angular",
          level: 5,
          icon: "/img/angular.png",
        },
        {
          name: "Android",
          level: 50,
          icon: "/img/android.png",
        },
      ],
    },
    {
      type: "Cloud",
      icon: "/img/cloud.png",
      experience: "1 año de experiencia",
      tech: [
        {
          name: "AWS",
          level: 45,
          icon: "/img/aws.png",
        },
        {
          name: "Jenkins",
          level: 15,
          icon: "/img/jenkins.png",
        },
        {
          name: "Terraform",
          level: 15,
          icon: "/img/terraform.png",
        },
        {
          name: "Ansible",
          level: 0,
          icon: "/img/ansible.png",
        },
        {
          name: "Bash",
          level: 30,
          icon: "/img/bash.png",
        },
      ],
    },
    {
      type: "Otros",
      icon: "/img/other.png",
      experience: "1 año de experiencia",
      tech: [
        {
          name: "Scrum",
          level: 80,
          icon: "/img/scrum.png",
        },
        {
          name: "Jira",
          level: 60,
          icon: "/img/jira.png",
        },
        {
          name: "Excel",
          level: 20,
          icon: "/img/excel.png",
        },
        {
          name: "PowerBI",
          level: 5,
          icon: "/img/powerbi.png",
        },
      ],
    },
    {
      type: "Blandas",
      icon: "/img/softskills.png",
      experience: "2 años de experiencia",
      tech: [
        {
          name: "Comunicación",
          level: 80,
          icon: "/img/communication.png",
        },
        {
          name: "Liderazgo",
          level: 50,
          icon: "/img/leadership.png",
        },
        {
          name: "Hablar en público",
          level: 65,
          icon: "/img/public-speaking.png",
        },
        {
          name: "Inglés",
          level: 60,
          icon: "/img/english.png",
        },
      ],
    },
  ];

  const certificates = [
    {
      name: "AWS Certified Cloud Practitioner",
      image: "/img/aws-cloud-practicioner.png",
      entity: "AWS",
      date: "Sep 01, 2023",
      active: true,
      url: "https://www.credly.com/badges/aec63f24-bbd0-4b74-9055-6c5e8c5f054a",
    },
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      image: "/img/aws-foundation.png",
      entity: "AWS",
      date: "Oct 28, 2020",
      active: true,
      url: "https://www.credly.com/badges/dd0f0ef6-b3ab-4d5e-b94f-40700bd9dac6",
    },
    {
      name: "Scrum Foundation Professional Certification - SFPC™",
      image: "/img/scrum-foundation.png",
      entity: "CertiProf",
      date: "Sep 15, 2023",
      active: true,
      url: "https://www.credly.com/badges/c984dacb-8b10-450f-92e7-74e99a878d9e",
    },
    {
      name: "Lifelong Learning",
      image: "/img/certiprof-lll.png",
      entity: "CertiProf",
      date: "Sep 15, 2023",
      active: true,
      url: "https://www.credly.com/badges/3b2422f8-45a4-4a90-b795-10bbabe57dc5",
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

  const displaySkills = (skill) => {
    const sectionSelected = new ClassList(
      document.querySelector(`.list.${skill}`)
    );
    sectionSelected.toggle("close");
    sectionSelected.toggle("open");

    const arrow = new ClassList(document.querySelector(`.arrow.${skill}`));
    arrow.toggle("close");
    arrow.toggle("open");
  };

  useEffect(() => {
    selectOption("education");
  }, []);

  return (
    <div className="cv page">
      <h1 className="p-xxl-secondary-600 p-center">Hoja de vida</h1> <br />
      <h2 className="p-m-default-400 p-center">Mi trayectoria</h2> <br />
      <p className="p-xs-secondary-400 p-center cita p-font-main">
        Además de mi expertice técnica te ofresco auténtica pasión por lo que
        hago e identificación y alineación con tu propósito
      </p>
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
            <div className="container">
              {certificates.map((c) => {
                return (
                  <a href={c.url} key={c.name} target="_blank">
                    <img src={c.image} />
                    <div>
                      <p className="p-s-main-600">{c.name}</p>
                      <p className="p-s-default-600">{c.entity}</p>
                      <p className="p-xs-default-400">{c.date}</p>
                      <span>{c.active}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="content skills" data-content id="skills">
            <div className="container">
              {skills.map((skill) => {
                return (
                  <div className="data" key={skill.type}>
                    <div
                      className="header"
                      onClick={() => displaySkills(skill.type)}
                    >
                      <img src={skill.icon} />

                      <div>
                        <h2 className="p-m-secondary-600">{skill.type}</h2>
                        <p className="p-xxs-default-500">{skill.experience}</p>
                      </div>

                      <div
                        className={`p-m-secondary-600 arrow close ${skill.type}`}
                      >
                        <IoIosArrowDown />
                      </div>
                    </div>

                    <div
                      className={`list close ${skill.type}`}
                      key={skill.type}
                    >
                      {skill.tech.map((t) => {
                        return (
                          <div className="info" key={t.name}>
                            <div className="title">
                              <div className="main">
                                <img src={t.icon} />
                                <h3 className="p-xxs-default-500">{t.name}</h3>
                              </div>
                              <p className="p-xs-default-400">{t.level}%</p>
                            </div>
                            <div className="bar">
                              <span style={{ width: `${t.level}%` }}></span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
