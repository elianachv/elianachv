import "./scss/styles.scss";
import { Routes, Route } from "react-router-dom";
import { Home, CV } from "./pages";
import { MenuBar, Footer } from "./components";
function App() {
  return (
    <>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
