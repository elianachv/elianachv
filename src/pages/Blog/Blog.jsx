import React from "react";
import "./Blog.scss";
import profileImage from "../../assets/profile-img2.png";
import { TypedEffect } from "../../hooks";
import { SocialNetworks } from "../../components";
import { Link } from "react-router-dom";

function Blog() {
  const posts = [
    {
      id: 2,
      img: "https://www.dongee.com/tutoriales/content/images/size/w1000/2023/02/image-48.png",
      title: "¿Cómo prepararte para presentar una prueba técnica?",
      category: "Trabajo",
      author: "Eliana Chávez V",
      date: "2023-10-03",
      formatDate: "Sep 23, 2023",
    },
    {
      id: 3,
      img: "https://www.dongee.com/tutoriales/content/images/size/w1000/2023/02/image-48.png",
      title: "Maratón de python",
      category: "Desarrollo",
      author: "Eliana chavez V",
      date: "2023-10-03",
      formatDate: "Sep 23, 2023",
    },
    {
      id: 4,
      img: "https://www.dongee.com/tutoriales/content/images/size/w1000/2023/02/image-48.png",
      title: "AWS Women Group Colombia: Workshop DynamoDB",
      category: "Comunidad",
      author: "Eliana chavez V",
      date: "2023-10-03",
      formatDate: "Sep 23, 2023",
    },
    {
      id: 5,
      img: "https://www.dongee.com/tutoriales/content/images/size/w1000/2023/02/image-48.png",
      title: "Mi experiencia en el AWS Comunnity Day",
      category: "Comunidad",
      author: "Eliana chavez V",
      date: "2023-10-03",
      formatDate: "Sep 23, 2023",
    },
  ];

  const categories = [
    { name: "Desarrollo", icon: "/img/dev.png" },
    { name: "Comunidad", icon: "/img/dev.png" },
    { name: "Arquitectura de software", icon: "/img/dev.png" },
  ];

  const tags = [
    "mongo",
    "aws",
    "devops",
    "terraform",
    "docker",
    "java",
    "python",
  ];

  return (
    <div className="blog page">
      <div className="blog__container">
        <div className="blog__container-hero">
          <div className="info">
            <div className="info-name">
              <h1 className="p-xxl-secondary-600">Blog</h1>

              <div className="p-xxl-main-600 p-font-code p-center">
                <TypedEffect
                  texts={["Hola mundo", "Tecnología", "Desarrollo", "Trabajo"]}
                  classes="p-font-code"
                />
              </div>
            </div>

            <p className="p-l-default-400">By Eli</p>
            <p className="p-m-default-400">
              Cuando sientas confusión al aprender algo nuevo no te asustes vas
              por buen camino
            </p>

            <div className="button-container">
              <button className="button-secondary-light">Ver más blogs</button>
              <Link to="/#contacto">
                <button className="button-secondary-light">Contáctame</button>
              </Link>
            </div>
          </div>
          <div className="img">
            <img src={profileImage} alt="" />
          </div>
        </div>

        <div className="blog__container-main">
          <div className="blog__container-main-blog">
            <h3 className="p-l-secondary-600 p-center">
              Últimas publicaciones
            </h3>
            <br />

            <div className="posts-group">
              {posts.map((post) => {
                return (
                  <div className="post" key={post.id}>
                    <div className="post-banner">
                      <img src={post.img} alt="" width={250} />
                    </div>

                    <div className="post-content">
                      <button className="tag">{post.category}</button>

                      <Link to={`/blog/${post.id}`}>
                        <p className="p-l-main-600 title">{post.title}</p>
                      </Link>

                      <p className="p-s-default-400 text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo eius deserunt, quas iste ipsa numquam expedita
                        beatae laboriosam dicta molestiae a non est harum,
                        dolore aspernatur sed nam maxime ut?
                      </p>

                      <div className="info">
                        <div className="author">
                          <img
                            src="/img/java.png"
                            alt={post.author}
                            width={50}
                          />
                          <p className="p-s-default-500">{post.author}</p>
                        </div>

                        <div className="date">
                          <p className="p-xs-default-400">
                            <time dateTime={post.date}>{post.formatDate}</time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="button-container-centered">
              <button className="button-secondary-light">Ver más</button>
            </div>
          </div>

          <aside className="blog__container-main-aside">
            <div className="blog__container-main-aside-categories">
              <h3 className="p-l-secondary-600">Categorías</h3>
              <br />

              {categories.map((category) => {
                return (
                  <div className="category" key={category.name}>
                    <div className="img">
                      <img src={category.icon} alt={category.name} />
                    </div>

                    <div className="info">
                      <p className="p-m-default-400">{category.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="blog__container-main-aside-tags">
              <h3 className="p-l-main-600">Etiquetas</h3>
              <br />

              <div>
                {tags.map((tag) => {
                  return (
                    <div className="tag" key={tag}>
                      <p className="p-s-default-400">#{tag}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="blog__container-main-aside-contact">
              <h3 className="p-l-secondary-600">¡Hablemos!</h3>
              <br />

              <div className="info">
                <p className="p-s-default-400 p-center">
                  ¿Te gustaría saber más sobre cómo puedo ayudar a tu empresa o
                  startup a resolver sus problemas?
                </p>
                <br />

                <SocialNetworks />
              </div>
            </div>

            <div className="blog__container-main-aside-newsletter">
              <h3 className="p-l-main-600">Lista de correo</h3>
              <br />

              <div className="info">
                <p className="p-s-default-400 p-center">
                  Suscribete a mi lista de correo para estar al tanto de las
                  últimas actualizaciones
                </p>

                <form action="">
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo"
                    required
                  />
                  <div className="button-container-centered">
                    <button className="button-light">Suscribir</button>
                  </div>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Blog;
