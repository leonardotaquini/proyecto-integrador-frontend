import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import "./home.css";
import { Search } from "../components/searchbar/Search";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="vh-100 d-flex flex-column justify-content-column">
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <main className="d-flex  justify-content-center aling-items-center main border border-dark ">
          <article className="articulo-1 d-flex justify-content-around aling-items-center flex-column border border-dark ">
            <section className="m-auto border border-dark">
              <h1 className="titulo  m-auto ">Arreglos Ya</h1>
            </section>
            <section className="">
              <div className="d-flex justify-content-center aling-items-center border border-dark  ">
                <img src="./logos/busqueda.png" alt="" className="logo" />
                <Search />
              </div>
            </section>
            <section className="d-flex justify-content-around aling-items-center m-auto col-10 col-sm-8 col-lg-5 border border border-dark">
              <Link to="/" className="text-decoration-none text-dark">
                Electricista
              </Link>
              <Link to="/" className="text-decoration-none text-dark">
                Plomero
              </Link>
              <Link to="/" className="text-decoration-none text-dark">
                Carpintero
              </Link>
              <Link to="/" className="text-decoration-none text-dark">
                Gasista
              </Link>
            </section>
          </article>
          <article className="articulo-2 d-flex justify-content-between aling-items-center flex-column ">
            <section></section>
          </article>
        </main>
      </div>
    </>
  );
};
