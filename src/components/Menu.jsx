import React from 'react'
import {
    Link
} from "react-router-dom";
function Menu() {
    return (
        <>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/consultarproductos">Consultar Productos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/agregarproductos">Agregar Productos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Link</Link>
                </li>

            </ul>
        </>
    )
}

export default Menu
