import React from "react";
import Marquee from "react-fast-marquee";
import "./Enterprises.scss";

const Enterprises = () => {
  const logos = [
    {
      logo: "/img/logo_bpop.png",
      url: "https://bancopopular.com.co",
    },
    {
      logo: "/img/logo_agilpago.png",
      url: "https://www.agilpagoonline.com/",
    },
    {
      logo: "/img/logo_mirai.png",
      url: "https://mirai.com.co",
    },
    {
      logo: "/img/logo_ethicos.png",
      url: "https://ethicos.com.co",
    },
    {
      logo: "/img/logo_usta.png",
      url: "https://usantotomas.edu.co",
    },
  ];
  return (
    <div className="enterprises">
      <h2 className="p-xxl-secondary-600 p-center">Confían en mí</h2>
      <h3 className="p-l-default-300 p-center p-cursive">
        Algunos de mis clientes y empresas con las que he trabajado
      </h3>
      <br />

      <div className="enterprises__container">
        <Marquee
          play={true}
          pauseOnHover
          direction="left"
          speed={25}
          gradient={false}
        >
          {logos.map((logo) => {
            return (
              <a href={logo.url} target="_blank" key={logo.url}>
                <div className="logo">
                  <img src={logo.logo} alt="" />
                </div>
              </a>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Enterprises;
