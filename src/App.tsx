
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Asegúrate de que estén importados correctamente
import Contacto from "./views/contact/contacto";
import Inicio from "./views/pages/inicio";
import Acerca from "./views/about/acerca";
import "./index.css";
const App = () => {
 
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Inicio</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/about">Acerca</Link>
      </header>
      <Routes>
        <Route path="/contact" element={<Contacto />} />
        <Route path="/about" element={<Acerca />} />
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
