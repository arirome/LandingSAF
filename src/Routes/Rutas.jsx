import { Routes, Route } from 'react-router-dom';
import LandingPage from "../Views/LandingPage/LandingPage";
import Puntos from "../Views/Puntos/Puntos";
import Catalogo from "../Views/Catalogo/Catalogo";
import Contacto from "../Views/Contacto/Contacto";
import Informativo from "../Views/Informativo/Informativo";

export default function Rutas() {

  return (
    
      <Routes>
            <Route path={"/"} exact element={<LandingPage/>}/>
            <Route path={"/puntos"} exact element={<Puntos/>}/>
            <Route path={"/catalogo"} exact element={<Catalogo/>}/>
            <Route path={"/contacto"} exact element={<Contacto/>}/>
            <Route path={"/informativo"} exact element={<Informativo/>}/>
            <Route path={"/*"} exact element={<LandingPage/>}/>
      </Routes>

  )
}