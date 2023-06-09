 import axios from "axios";
 import { validarListadoProfesionales, validarProfesionalObtenido, validarProfesional } from './validaciones/profesionalValidacion.js';

 export const listarProfesionales = async() => {
    try {
        const res = await axios.get("http://localhost:3000/api/profesional/listar");
        // validarListadoProfesionales()
        return res;
    } catch (error) {
        console.log(error);
    }
 }

 export const obtenerProfesional = async(id) => {
    const res = await axios.get(`http://localhost:3000/api/profesional/${id}`);
    return res;
 }

 export const registrarProfesional = async(profesional) => {
    const res = await axios.post("http://localhost:3000/api/profesional/registrar", profesional);
    return res;
 }

 export const actualizarProfesional = async(profesional) => {
    const res = await axios.put("http://localhost:3000/api/profesional/actualizar", profesional);
    return res;
 }

 export const eliminarProfesional = async(id) => {
    const res = await axios.delete(`http://localhost:3000/api/profesional/eliminar/${id}`);
    return res;
 }