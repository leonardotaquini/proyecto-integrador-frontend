import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { RegistroProfesional } from "./pages/registroProfesional/RegistroProfesional";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProfesionalState } from "./context/profesional/ProfesionalState";
import { ProfesionalesList } from "./pages/listaProfesionales/ProfesionalesList";
import { Login } from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <ProfesionalState>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profesional/registro" element={ <RegistroProfesional /> } />
            <Route path="/profesionales" element={<ProfesionalesList />} />
            <Route path='/login' element={ <Login />} />
      <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ProfesionalState>
      </BrowserRouter>
    </>
  );
}

export default App;
