import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-warning nav">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand title">Arreglos Ya</Link>
          <button className="navbar-toggler btn-hamburguesa" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item text-center">
                <Link to='/' className="nav-link items text-dark" aria-current="page">Inicio</Link>
              </li>
              <li className="nav-item text-center">
                <Link to='/profesionales' className="nav-link items text-dark">Profesionales</Link>
              </li>
              <li className="nav-item text-center dropdown">
              <Link to='/login' className="nav-link items text-dark ">Iniciar sesión</Link>
              </li>
              <li className="nav-item text-center">
                <Link to='/profesional/registro' className="nav-link items text-dark">Registrarse</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
