import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import './login.css';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className='d-flex flex-column justify-content-between border vh-100 '>
        <Navbar />

        <div className='m-auto border p-5 shadow-sm  mb-5 bg-body-tertiary rounded col-11 col-sm-8 col-lg-4'>
            <h2 className='text titulo'>Inicio de sesión</h2>
        <form className='d-flex flex-column'>    
            <label htmlFor="">Nombre de usuario</label>    
            <input className='form-control' type="text" required placeholder='' />

            <label htmlFor="">Contraseña</label>    
            <input className='form-control' type="password" required placeholder='' />
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
            <label className="form-check-label" for="form2Example31"> Recuerdame </label>
            <Link className='d-flex justify-content-center ' to='/profesional/registro'>¿ Olvidaste tu contraseña?</Link>

            </div>
            <button className='btn btn-warning mt-3'>Iniciar sesión</button>
            <p className='mt-2'>¿No tenes cuenta? <Link to='/profesional/registro'>Registrate</Link></p>
        </form>
        </div>

        
    </div>
  )
}

