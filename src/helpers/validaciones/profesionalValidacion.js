

export const validarListadoProfesionales = (profesionales) => {
    if(profesionales.length > 0) {
        throw new Error("No hay profesionales registrados");
    }
}

export const validarProfesionalObtenido = (profesional) => {
    if(!profesional) {
        throw new Error("El profesional no existe");
    }
}


export const validarProfesional = (profesional) => {
    if(!profesional.nombre || !profesional.apellido || !profesional.fecha_nacimiento || !profesional.email || !profesional.telefono || !profesional.profesion) {
        throw new Error("Todos los campos son obligatorios");
    }
}


