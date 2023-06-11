import { TYPES } from "../types";

export const ProfesionalReducer = (state, action) => {
    
    const { type, payload } = action;

    switch (type) {
        case TYPES.LISTAR_PROFESIONALES:
            return {
                ...state,
                profesionales: payload,
            }

        case TYPES.ACTUALIZAR_LISTA:
            return {
                ...state,
                actualizarLista: payload
            }
        default:
            return state;
    }
}