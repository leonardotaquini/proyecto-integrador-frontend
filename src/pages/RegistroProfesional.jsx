import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import "./registroProfesional.css";
import { useForm } from "react-hook-form";
import axios from "axios";

export const RegistroProfesional = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      fecha_nacimiento:"",
      email: "",
      telefono: "",
      profesion: "",
    },
  });

  const onSubmit = async (profesional) => {
    try {
        const res = await axios.post("http://localhost:3000/api/profesional/registrar", profesional);
        console.log(res); 
        reset();
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="formulario-contenedor justify-content-center align-items-center">
          <div className="col-11 col-sm-8 col-lg-6 formulario d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-center m-3">Registro Profesional</h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="form col-12 col-sm-10 col-md-8 col-lg-8"
            >
              <div className="">
                <label htmlFor="nombre">Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  id="nombre"
                  {...register("nombre", { required: true })}
                />
                {errors.nombre?.type === "required" && (
                  <p className="alert alert-danger">Debe ingresar el nombre</p>
                )}
              </div>
              <div className="">
                <label htmlFor="apellido">Apellido</label>
                <input
                  className="form-control"
                  type="text"
                  id="apellido"
                  {...register("apellido", { required: true })}
                />
                {errors.apellido?.type === "required" && (
                  <p className="alert alert-danger">
                    Debe ingresar el apellido
                  </p>
                )}
              </div>
              <div className="">
                <label htmlFor="fecha_nacimiento">Fecha de Nacimiento</label>
                <input
                  className="form-control"
                  type="date"
                  id="fecha_nacimiento"
                  {...register("fecha_nacimiento", { required: true })}
                />
                {errors.nacimiento?.type === "required" && (
                  <p className="alert alert-danger">
                    Debe ingresar la fecha de nacimiento
                  </p>
                )}
              </div>
              <div className="">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="alert alert-danger">Debe ingresar el email</p>
                )}
              </div>
              <div className="">
                <label htmlFor="telefono">Telefono</label>
                <input
                  className="form-control"
                  type="number"
                  id="telefono"
                  {...register("telefono", { required: true })}
                />
                {errors.telefono?.type === "required" && (
                  <p className="alert alert-danger">
                    Debe ingresar el telefono
                  </p>
                )}
              </div>
              <div className="">
                <label htmlFor="profesion">Profesion</label>
                <input
                  className="form-control"
                  type="text"
                  id="profesion"
                  {...register("profesion", { required: true })}
                />
                {errors.profesion?.type === "required" && (
                  <p className="alert alert-danger">
                    Debe ingresar la profesion
                  </p>
                )}
              </div>
              <button className="btn btn-warning my-2 w-100">Registrar</button>
            </form>
          </div>
      </div>
    </>
  );
};
