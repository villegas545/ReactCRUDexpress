import React, { useEffect } from 'react'
import axios from 'axios';

import Modaltabla from './Modaltabla';
function Tablaproductos() {
    const [productos, setProductos] = React.useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [producto, setProducto] = React.useState({});
    useEffect(() => {
        cargarTabla();
    }, [producto])
    const cargarTabla = async () => {
        try {
            const datos = await axios.get("http://localhost:5001/productos");
            setProductos(datos.data);
        } catch (error) {
            alert("No se pudo mostrar" + error);
            console.log(error)
        }
    }
    const eliminarProoducto = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/productos/${id}`);
            cargarTabla();
        } catch (error) {
            alert("No se pudo eliminar el producto" + error);
            console.log(error)
        }
    }

    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Codigo</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Eliminar</th>

                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, index) => (
                        <tr key={producto.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{producto.codigo}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.marca}</td>
                            <td>{producto.categoria}</td>
                            <td><button className="btn btn-warning" onClick={() => {
                                setProducto({
                                    id: producto.id,
                                    codigo: producto.codigo,
                                    descripcion: producto.descripcion,
                                    precio: producto.precio,
                                    marca: producto.marca,
                                    categoria: producto.categoria
                                })
                                setModalShow(true);
                            }}>Modificar</button></td>
                            <td><button className="btn btn-danger" onClick={() => eliminarProoducto(producto.id)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modaltabla
                onHide={() => setModalShow(false)}
                show={modalShow}
                datos={producto}
            />
        </>
    )
}

export default Tablaproductos
