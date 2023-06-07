import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { RegistroProfesional } from './pages/RegistroProfesional';
import { NotFoundPage } from './pages/NotFoundPage';
import { Login } from './pages/Login';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/profesional/registro" element={ <RegistroProfesional /> } />
      <Route path='/login' element={ <Login />} />
      <Route path="*" element={ <NotFoundPage /> } />
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App;
