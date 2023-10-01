import { React, useState } from "react";
import { notify } from "../../utils/notifications";
import "./Contact.scss";

import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

function Contact() {
  const initialMessage = {
    name: "",
    email: "",
    project: "",
    message: "",
  };

  const [message, setMessage] = useState(initialMessage);

  const manageForm = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  const validateMessage = () => {
    const regex = new RegExp(
      "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
    );

    if (
      message.name.length >= 3 &&
      regex.test(message.email) &&
      message.project.length >= 3 &&
      message.message.length >= 3
    ) {
      return true;
    }

    return false;
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (validateMessage()) {
      notify("top-end", "success").fire(
        "Tu mensaje fue enviado",
        "Pronto me contactaré contigo"
      );
      console.log(message);
    } else {
      notify("top-end", "error").fire(
        "La información del formulario no es correcta",
        "Revisa nuevamente que tus  datos sean válidos"
      );
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="p-xxl-secondary-600 p-center">¿Tienes una idea?</h2>
      <h3 className="p-l-default-300 p-center p-cursive">
        No dudes en contactarme
      </h3>
      <br />
      <br />
      <div className="contact__container">
        <div className="contact__container-info">
          <p className="p-m-default-400">
            <span className="p-l-main-600">
              <BsWhatsapp />
            </span>
            +57 3212123655
          </p>
          <p className="p-m-default-400">
            <span className="p-l-main-600">
              <HiOutlineMail />
            </span>
            elianachavezv@gmail.com contacto@elianachv.dev
          </p>
          <p className="p-m-default-400">
            <span className="p-l-main-600">
              <MdLocationOn />
            </span>
            Bogotá D.C, Colombia
          </p>
        </div>
        <div className="contact__container-form">
          <form action="" onSubmit={sendMessage}>
            <div className="customer-section">
              <div className="contact-content">
                <label className="p-xxs-default-400" htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Eliana"
                  name="name"
                  onChange={manageForm}
                  required
                />
              </div>

              <div className="contact-content">
                <label className="p-xxs-default-400" htmlFor="name">
                  Correo
                </label>
                <input
                  type="text"
                  placeholder="ejemplo@gmail.com"
                  name="email"
                  onChange={manageForm}
                  required
                />
              </div>
            </div>

            <div className="project-section">
              <div className="contact-content">
                <label className="p-xxs-default-400" htmlFor="name">
                  Proyecto
                </label>
                <input
                  type="text"
                  placeholder="Web App"
                  name="project"
                  onChange={manageForm}
                  required
                />
              </div>
              <div className="contact-content">
                <label className="p-xxs-default-400" htmlFor="name">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                  onChange={manageForm}
                  required
                />
              </div>

              <button className="button">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
