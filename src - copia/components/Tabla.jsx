import React from 'react'

function Tabla({ cabecera, datos }) {
    console.log(datos);
    return (
        <div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>{cabecera.Nombre}</th>
                        <th>{cabecera.Apellido}</th>
                        <th>{cabecera.Telefono}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datos.map(fila => (
                            <tr>
                                <td>{fila.Nombre}</td>
                                <td>{fila.Apellido}</td>
                                <td>{fila.Telefono}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tabla
