import {
  MenuBar,
  Header,
  About,
  Services,
  Values,
  Enterprises,
  Testimonials,
  Contact,
  Footer,
} from "../../components";

import "./Home.scss";
function Home() {
  return (
    <div className="home">
      <MenuBar />
      <Header />
      <About />
      <Services />
      <Enterprises />
      <Values />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
