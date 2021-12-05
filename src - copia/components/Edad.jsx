import React from 'react'
import NoEntraste from '../Img/Noentraste.jpg'
import SiEntraste from '../Img/Si entraste.jpg'
function Edad() {
    const [validacion, setValidacion] = React.useState(false)
    const [edad, setEdad] = React.useState(0)
    const compararEdad = () => {
        if (edad >= 18) {
            setValidacion(true);
        } else {
            setValidacion(false);
        }
    }
    return (
        <div>
            <label>Edad:</label>
            <input type="number" onChange={(e) => setEdad(e.target.value)} />
            <input type="submit" value="Verificar" onClick={() => compararEdad()} />
            {validacion ? //Es la condicion, el ? significa entonces 
                <img src={SiEntraste} alt="" width="100" />
                :  //El : signica de lo contrario/else
                <img src={NoEntraste} alt="" width="100" />
            }
        </div>
    )
}

export default Edad
