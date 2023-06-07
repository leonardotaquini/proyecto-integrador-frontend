import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import "./home.css";

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
          <article className="articulo d-flex justify-content-between aling-items-center flex-column border border-dark">
            <section className="m-auto border border-dark">
              <h1 className="titulo border border-dark m-auto ">Arreglos Ya</h1>
            </section>
            <section className="">
              <div className="d-flex justify-content-center aling-items-center border border-dark  ">
                <form action="">
                  <input
                    type="search"
                    placeholder="Que estas buscando?"
                    className="barraNav text-center rounded form-control border border-dark  "
                  />
                </form>
              </div>
            </section>
          </article>
        </main>
      </div>
    </>
  );
};
