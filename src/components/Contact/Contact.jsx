import { React, useState } from "react";
import { notify } from "../../utils/notifications";
import { info } from "../../constants/info";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

function Contact() {
  const initialMessage = {
    name: "",
    email: "",
    project: "",
    message: "",
  };

  const [message, setMessage] = useState(initialMessage);
  const [sending, setSending] = useState(false);

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
      setSending(true);
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          e.target,
          import.meta.env.VITE_EMAIL_KEY
        )
        .then(() => {
          setSending(false);
          notify("top-end", "success").fire(
            "Tu mensaje fue enviado",
            "Pronto me contactaré contigo"
          );

          document.getElementById("form").reset();
          // window.scroll(0, 0);
        })
        .catch((error) => {
          setSending(false);
          console.log(error);
          notify("top-end", "error").fire(
            "Hubo un problema",
            "Intenta nuevamente"
          );
        });
    } else {
      notify("top-end", "error").fire(
        "La información del formulario no es correcta",
        "Revisa nuevamente que tus  datos sean válidos"
      );
    }
  };

  return (
    <section id="contacto" className="contact">
      <h2 className="p-xxl-secondary-600 p-center">¿Tienes una idea?</h2>
      <h3 className="p-l-default-300 p-center p-cursive">
        No dudes en contactarme
      </h3>
      <br />
      <br />
      <div className="contact__container">
        <div className="contact__container-info">
          <a href={info.links.whatsapp} target="_blank">
            <p className="p-m-default-400">
              <span className="p-l-main-600">
                <BsWhatsapp />
              </span>
              +57 3212123655
            </p>
          </a>

          <a href={`mailto:${info.correos.contacto}`}>
            <p className="p-m-default-400">
              <span className="p-l-main-600">
                <HiOutlineMail />
              </span>
              elianachavezv@gmail.com
            </p>
          </a>
          <p className="p-m-default-400">
            <span className="p-l-main-600">
              <MdLocationOn />
            </span>
            Bogotá D.C, Colombia
          </p>
        </div>
        <div className="contact__container-form">
          <form id="form" onSubmit={sendMessage}>
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
                <label className="p-xxs-default-400" htmlFor="email">
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
                <label className="p-xxs-default-400" htmlFor="project">
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
                <label className="p-xxs-default-400" htmlFor="message">
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

              <button className="button">
                {sending ? "Enviando ..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
