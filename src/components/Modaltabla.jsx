import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import axios from 'axios';
function Modaltabla(props) {
    const [codigo, setCodigo] = React.useState();
    const [descripcion, setDescripcion] = React.useState('');
    const [precio, setPrecio] = React.useState('');
    const [marca, setMarca] = React.useState('');
    const [categoria, setCategoria] = React.useState('');
    console.log(props);
    const actualizarDatos = async (e) => {
        e.preventDefault();
        try {
            const producto = {
                codigo: codigo,
                descripcion: descripcion,
                precio: precio,
                marca: marca,
                categoria: categoria
            }
            await axios.put(`http://localhost:5001/productos/${props.datos.id}`, producto);
            alert('Producto actualizado');
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }
    React.useEffect(() => {
        setCodigo(props.datos.codigo);
        setDescripcion(props.datos.descripcion);
        setPrecio(props.datos.precio);
        setMarca(props.datos.marca);
        setCategoria(props.datos.categoria);
    }, [props])
    return (
        <>
            <Modal
                onHide={props.onHide}
                show={props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => actualizarDatos(e)}>
                        <div className="mb-3">
                            <label className="form-label">Codigo</label>
                            <input type="text" className="form-control" placeholder="Codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descripcion</label>
                            <input type="text" className="form-control" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Marca</label>
                            <input type="text" className="form-control" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Precio</label>
                            <input type="text" className="form-control" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Categoria</label>
                            <input type="text" className="form-control" placeholder="Categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn btn-warning">Modificar</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Modaltabla
