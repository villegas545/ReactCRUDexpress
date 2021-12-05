import React from 'react'

function Suma() {
    const [valor1,setValor1] = React.useState(0);
    const [valor2,setValor2] = React.useState(0);
    const [resultado,setResultado] = React.useState(0);
    
    const sumar = () =>{
        setResultado(parseFloat(valor1)+parseFloat(valor2));
    }
    
    return (
        <div>
            <input className="form-control" type="number" onChange={(e) =>  setValor1(e.target.value)} />      
            <input className="form-control" type="number" onChange={(e) =>  setValor2(e.target.value)} /> 
            <input className="form-control" type="submit" value="Sumar" onClick={() => sumar()} />
            <input className="form-control" type="number" value={resultado} />
        </div>
    )
}

export default Suma
