import { ProfesionalContext } from '../../context/profesional/profesionalContext';
import { useContext } from 'react';
import { Navbar } from '../../components/navbar/Navbar';

export const ProfesionalesList = () => {
    const { profesionales } = useContext(ProfesionalContext);



  return (
    <>
        <div className='col-12'>
            <Navbar/>
            {
                profesionales.length === 0 && <div className='alert alert-danger w-100 text-center'>No hay profesionales</div>
            }
            {
                profesionales.map((profesional, i) => <div key={i}>{profesional.nombre} {profesional.profesion}</div> )
            }
        </div>
    </>
  )
}
