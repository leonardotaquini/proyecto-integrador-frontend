import React from "react";

export const Search = () => {
  return (
    <>
      <form
        action=""
        className="col-10 col-sm-8 col-lg-5 d-flex justify-content-center aling-items-center "
      >
        <input
          type="text"
          placeholder="Que estas buscando?"
          className="barraNav form-control rounded-start "
        />
        <button className="boton btn btn-primary rounded-end">Buscar</button>
      </form>
    </>
  );
};
