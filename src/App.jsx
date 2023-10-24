import "./scss/styles.scss";
import { Routes, Route } from "react-router-dom";
import { Home, CV, Blog, Portafolio, Error } from "./pages";
import { MenuBar, Footer } from "./components";
function App() {
  return (
    <>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
