import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import "./home.css";
import { Search } from "../components/searchbar/Search";
import { Link } from "react-router-dom";
import { Slider } from "../components/slider/Slider";

export const Home = () => {
  return (
    <>
      <div className="vh-100 d-flex flex-column ">
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
            <section className="etiquetas-slider d-flex">
              <div className="etiquetas d-flex flex-column justify-content-center aling-items-center m-auto col-10 col-sm-8 col-lg-5 border border border-dark ">
                <div className="titulo-etiquetas m-auto ">
                  Lo mas buscado...
                </div>

                <div className="border border-dark m-auto ">
                  <Link to="/" className="text-decoration-none text-dark">
                    <h5>Electricista</h5>
                  </Link>
                </div>

                <div className="border border-dark m-auto">
                  <Link to="/" className="text-decoration-none text-dark">
                    <h5>Plomero</h5>
                  </Link>
                </div>

                <div className="border border-dark m-auto">
                  <Link to="/" className="text-decoration-none text-dark">
                    <h5>Carpintero </h5>
                  </Link>
                </div>

                <div className="border border-dark m-auto">
                  <Link to="/" className="text-decoration-none text-dark">
                    <h5>Gasista</h5>
                  </Link>
                </div>
              </div>
              <div className="slider d-flex  justify-content-start aling-items-start m-auto col-10 col-sm-8 col-lg-5 border border border-dark  ">
                <slider />
              </div>
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
