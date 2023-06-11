import { Navbar } from "../../components/navbar/Navbar";
import "./registroProfesional.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ProfesionalContext } from "../../context/profesional/profesionalContext";


export const RegistroProfesional = () => {

  const { guardarProfesional } = useContext(ProfesionalContext);

  //Hook para manejar formularios
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      profesion: "",
    },
  });

  const onSubmit = async (profesional) => {
    await guardarProfesional(profesional);
    reset();
  };

  return (
    <>
      <Navbar />

      <div className="formulario-contenedor">
        <div className="d-flex border col-12 justify-content-center align-items-center">
          <div className="shadow col-11 col-sm-8 col-lg-4 formulario h-100 d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-center m-3">Registro del Profesional</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="form col-10">

              <label htmlFor="nombre">Nombre</label>
              <input className="form-control" type="text" id="nombre" {...register("nombre", { required: true })}/>
              {errors.nombre?.type === "required" && (<p className="alert alert-danger">Debe ingresar el nombre</p>)}

              <label htmlFor="apellido">Apellido</label>
              <input className="form-control" type="text" id="apellido" {...register("apellido", { required: true })}/>
              {errors.apellido?.type === "required" && (<p className="alert alert-danger">Debe ingresar el apellido</p>)} 
              <label htmlFor="nacimiento">Fecha de Nacimiento</label>
              <input className="form-control" type="date" id="nacimiento" {...register("nacimiento", { required: true })}/>
              {errors.nacimiento?.type === "required" && (<p className="alert alert-danger">Debe ingresar la fecha de nacimiento</p>)}
              
              <label htmlFor="email">Email</label>
              <input className="form-control" type="email" id="email" {...register("email", { required: true })}/>
              {errors.email?.type === "required" && (<p className="alert alert-danger">Debe ingresar el email</p>)}
              <label htmlFor="telefono">Telefono</label>
              <input  className="form-control"  type="number" id="telefono"  {...register("telefono", { required: true })}/>
              {errors.telefono?.type === "required" && (<p className="alert alert-danger">Debe ingresar el telefono  </p>)}
              
              <label htmlFor="profesion">Profesion</label>
              <input className="form-control" type="text" id="profesion" {...register("profesion", { required: true })}/>
              {errors.profesion?.type === "required" && (<p className="alert alert-danger">Debe ingresar la profesion</p>)}
              
              <button className="btn btn-warning my-2 w-100">Registrar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
