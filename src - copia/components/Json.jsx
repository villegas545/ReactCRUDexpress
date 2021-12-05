import React from 'react'
let objetosJson =
    [
        {
            nombre: 'Julio',
            apellido: 'Villegas',
            telefono: '6366934592',
            ciudad: 'NCG'
        },
        {
            nombre: 'Benito',
            apellido: 'Juarez',
            telefono: '656987589',
            ciudad: 'Cd Mexico'
        },
        {
            nombre: 'Cesar',
            apellido: 'Venzor',
            telefono: '636636636',
            ciudad: 'Cd Juarez'
        }
    ]
function Json() {
    return (
        <div>
            {
                objetosJson.map((objetoIndividual) => (
                    <div>
                        <h1>Nombre:{objetoIndividual.nombre}</h1>
                        <h3>Apellido: {objetoIndividual.apellido}</h3>
                        <h6>Telefono: {objetoIndividual.telefono}</h6>
                        <h6>Ciudad: {objetoIndividual.ciudad}</h6>
                    </div>
                )
                )
            }
        </div>
    )
}

export default Json
