import { useEffect, useReducer, useState } from "react"
import { ProfesionalReducer } from "./profesionalReducer"
import { ProfesionalContext } from "./profesionalContext";
import { registrarProfesional, listarProfesionales } from "../../helpers/profesionalAxios"
import { TYPES } from "../types";

export const ProfesionalState = ({ children }) => {

    

    const initialState = {
      profesionales: [],
    }

    const [state, dispatch] = useReducer(ProfesionalReducer, initialState);
    const [actualizarLista, setactualizarLista] = useState(false);

    //Obtengo los profesionales al cargar la pagina por primera vez
    useEffect(() => {
        obtenerProfesionales();
    }, [actualizarLista]);
    

    
    const obtenerProfesionales = async () => {
        const res = await listarProfesionales();
        dispatch({
            type: TYPES.LISTAR_PROFESIONALES,
            payload: res.data
        })
    }

    const actualizar = (valor) => {
       setactualizarLista(valor);
    }

    const guardarProfesional = async(profesional) =>{
        const res = await registrarProfesional(profesional);
        actualizar(!actualizarLista)
    }

    return (
        <ProfesionalContext.Provider value={{
            profesionales: state.profesionales,
            guardarProfesional,    
        }}>
            {children}
        </ProfesionalContext.Provider>
    )
}
