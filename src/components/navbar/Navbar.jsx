import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <>
      <nav className="navbar d-flex  justify-content-between nav ">

        <a href='#' className='mx-2 fw-bold h4 text-dark title text-decoration-none'>
          Arreglos Ya
        </a>

        <div className='items'>
           <Link to='/' className='text-decoration-none px-3 text-center btn text-dark'>Inicio</Link> 
           <Link to='/profesionales' className='text-decoration-none px-3 text-center btn text-dark'>Profesionales</Link> 
           <Link to='/acerca' className='text-decoration-none px-3 text-center btn text-dark'>Sobre Nosotros</Link> 
           <Link to='/profesional/registro' className='text-decoration-none px-3 text-center btn text-dark'>Registrarse</Link> 
        </div>

      </nav>
    </>
  )
}
