import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import './login.css';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className='d-flex flex-column justify-content-between border vh-100 '>
        <Navbar />

        <div className='m-auto border p-5 shadow bg-body-tertiary rounded'>
            <h2 className='text titulo'>Inicio de sesión</h2>
        <form className='d-flex flex-column'>    
            <label htmlFor="">Nombre de usuario</label>    
            <input className='form-control' type="text" required placeholder='' />

            <label htmlFor="">Contraseña</label>    
            <input className='form-control' type="password" required placeholder='' />

            <button className='btn btn-warning mt-3'>Iniciar sesión</button>
            <p className='mt-2'>¿No tenes cuenta? <Link to='/profesional/registro'>Registrate</Link></p>
            <Link className='d-flex justify-content-center ' to='/profesional/registro'>¿ Olvidaste tu contraseña?</Link>

        </form>
        </div>

        
    </div>
  )
}

