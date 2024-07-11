import Acerca from "../views/about/acerca"; 
import Contacto from "../views/contact/contacto";
import Inicio from "../views/pages/inicio";

export const routes = [
  {
    path: "/about",
    element: <Acerca /> 
  },
  {
    path: "/contact",
    element: <Contacto />
  },
  {
    path: "/pages",
    element: <Inicio /> 
  }
];