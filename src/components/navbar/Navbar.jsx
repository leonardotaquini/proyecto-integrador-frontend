import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar d-flex  justify-content-between nav navbar-expand-lg">
        <Link
          to="/"
          className="mx-2 fw-bold h4 text-dark title text-decoration-none">
          Arreglos Ya
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="items collapse navbar-collapse navbar-collapse d-flex flex-column"
          id="navbarSupportedContent">
          <Link
            to="/"
            className="text-decoration-none px-3 text-center btn text-dark nav-item">
            Inicio
          </Link>
          <Link
            to="/profesionales"
            className="text-decoration-none px-3 text-center btn text-dark nav-item">
            Profesionales
          </Link>
          <Link
            to="/acerca"
            className="text-decoration-none px-3 text-center btn text-dark nav-item">
            Sobre Nosotros
          </Link>
          <Link
            to="/profesional/registro"
            className="text-decoration-none px-3 text-center btn text-dark nav-item">
            Registrarse
          </Link>
        </div>
      </nav>
    </>
  );
};
