import React from 'react'

function Funciones() {
   const [variable,setVariable]= React.useState("Hola villegas!!!")

    const mensaje2 = () =>{
       setVariable("Hola Julio!!!!!!")
    }
    return (
        <div>
            {variable}
           <input type="button" value="funcion Moderna" onClick={() =>mensaje2()} />
        </div>
    )
}

export default Funciones
