import React from 'react'
import axios from 'axios';
function Agregar() {
    const [codigo, setCodigo] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');
    const [precio, setPrecio] = React.useState('');
    const [marca, setMarca] = React.useState('');
    const [categoria, setCategoria] = React.useState('');

    const guardarDatos = async (e) => {
        e.preventDefault();
        try {
            const productos = {
                codigo,
                descripcion,
                precio,
                marca,
                categoria
            }
            await axios.post('http://localhost:5001/productos', { ...productos });
            alert('Producto agregado');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <form className="mt-5" onSubmit={(e) => guardarDatos(e)}>
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
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </>
    )
}

export default Agregar
