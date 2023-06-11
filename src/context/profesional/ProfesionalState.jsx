import { useEffect, useReducer, useState } from "react"
import { ProfesionalReducer } from "./profesionalReducer"
import { useNavigate } from "react-router-dom";
import { ProfesionalContext } from "./profesionalContext";
import { listarProfesionales, registrarProfesional , obtenerProfesional, actualizarProfesional, eliminarProfesional} from "../../helpers/profesionalAxios"
import { TYPES } from "../types";
export const ProfesionalState = ({ children }) => {

    const navigate = useNavigate();

    const initialState = {
      profesionales: [],
    }

    const [state, dispatch] = useReducer(ProfesionalReducer, initialState);
    const [actualizarLista, setactualizarLista] = useState(false);

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

    return (
        <ProfesionalContext.Provider value={{
            profesionales: state.profesionales,
            actualizar,     
        }}>
            {children}
        </ProfesionalContext.Provider>
    )
}
