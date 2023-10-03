import {
  Header,
  About,
  Services,
  Values,
  Enterprises,
  Testimonials,
  Contact,
} from "../../components";


function Home() {
  return (
    <div className="home page">
      <Header />
      <About />
      <Services />
      <Enterprises />
      <Values />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
