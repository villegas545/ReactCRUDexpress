import React from 'react'
import {
    Switch,
    Route,
    Link, BrowserRouter as Router
} from "react-router-dom";
import Login from '../pages/Login'
import Agregar from '../pages/productos/Agregar'
import Mostrar from '../pages/productos/Mostrar.jsx'
function Rutas() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/agregarproductos">
                    <Agregar />
                </Route>
                <Route exact path="/consultarproductos">
                    <Mostrar />
                </Route>
            </Switch>
        </>
    )
}

export default Rutas
