import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound404 = () => {
    return (
        <div className="container mt-5">
            <div className="notification is-grey">
                <p className="is-size-1">Error 404</p>
                <p className="mt-1">Página no encontrada</p>
            <   Link to="/">Volver al inicio</Link>
            </div>
        </div>
    )
}
