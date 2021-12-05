import React, { useEffect } from 'react'
import axios from 'axios'
function Alumnos() {
    const [datos, setDatos] = React.useState([]);
    const [Nombre, setNombre] = React.useState("");
    const [Apellidos, setApellidos] = React.useState("");
    const [Genero, setGenero] = React.useState("");
    const [FechaNacimiento, setFechaNacimiento] = React.useState("");
    const [validacionModificar, setValidacionModificar] = React.useState(false);
    const [idModificar, setIdModificar] = React.useState(0);
    useEffect(() => {
        cargarDatos()
    }, [])
    const cargarDatos = async () => {
        const respuesta = await axios.get('http://localhost:3002/api/alumno');
        setDatos(respuesta.data)
    }
    const agregarAlumno = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:3002/api/alumno", {
            Nombre,
            Apellidos,
            Genero,
            FechaNacimiento
        })
        cargarDatos()
    }
    const eliminarAlumno = async (id) => {
        await axios.delete(`http://localhost:3002/api/alumno/${id}`)
        cargarDatos();
    }
    const activarModificacion = async (id) => {
        const respuesta = await axios.get(`http://localhost:3002/api/alumno/${id}`)
        console.log(respuesta);
        setNombre(respuesta.data.Nombre)
        setApellidos(respuesta.data.Apellidos)
        setGenero(respuesta.data.Genero)
        setFechaNacimiento(respuesta.data.FechaNacimiento)
        setValidacionModificar(true)
        setIdModificar(id)
    }
    const modificarAlumno = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3002/api/alumno/${idModificar}`,
            {
                Nombre,
                Apellidos,
                Genero,
                FechaNacimiento
            })
        cargarDatos();
        setValidacionModificar(false)
    }
    return (
        <div className="container">
            <h1 className="text-center">CRUD ALUMNOS</h1>
            <div className="row">
                <div className="col-8">
                    <h3 className="text-center">Lista de Alumnos</h3>
                    <table className="table table-light">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Genero</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Modificar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datos.map(fila => (
                                    <tr>
                                        <td>{fila.Nombre}</td>
                                        <td>{fila.Apellidos}</td>
                                        <td>{fila.Genero}</td>
                                        <td>{fila.FechaNacimiento}</td>
                                        <td> <button className="btn btn-warning btn-sm" onClick={() => activarModificacion(fila.id)}>Modificar</button></td>
                                        <td><button className="btn btn-danger btn-sm" onClick={() => eliminarAlumno(fila.id)}>Eliminar</button></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
                <div className="col-4">
                    <h3 className="text-center">CRUD</h3>
                    <form>
                        <div class="mb-3">
                            <label class="form-label">Nombre</label>
                            <input type="text" class="form-control" onChange={(e) => setNombre(e.target.value)} value={Nombre} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Apellidos</label>
                            <input type="text" class="form-control" onChange={(e) => setApellidos(e.target.value)} value={Apellidos} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Genero</label>
                            <input type="text" class="form-control" onChange={(e) => setGenero(e.target.value)} value={Genero} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Fecha de nacimiento</label>
                            <input type="date" class="form-control" onChange={(e) => setFechaNacimiento(e.target.value)} value={FechaNacimiento} />
                        </div>
                        {validacionModificar ? (
                            <button className="btn btn-warning" onClick={(e) => modificarAlumno(e)}>Modificar</button>
                        ) : (
                            <button className="btn btn-success" onClick={(e) => agregarAlumno(e)}>Agregar</button>
                        )}

                    </form>
                </div>
            </div>
        </div >
    )
}

export default Alumnos
