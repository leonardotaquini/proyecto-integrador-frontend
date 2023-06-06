import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <>
        <div className='alert alert-danger text-center col-12 d-flex align-items-center justify-content-between'>
            <h5 className='m-auto'>Página no encontrada</h5>
            <Link to='/' className='btn btn-outline-primary'>Volver al inicio</Link>
        </div>
    </>
  )
}
