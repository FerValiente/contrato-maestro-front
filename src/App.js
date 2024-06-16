import AgregarAlumno from "./Alumnos/AgregarAlumno";
import Listadoalumnos from "./Alumnos/Listadoalumnos";
import Navegacion from "./Plantilla/Navegacion";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
     <BrowserRouter>
      <Navegacion/>
      <Routes>
        <Route exact path='/' element={<Listadoalumnos/>}/>
        <Route exact path='/agregar' element={<AgregarAlumno/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
