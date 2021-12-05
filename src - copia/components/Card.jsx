import React from 'react'

function Card(props) {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={props.imagen} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.titulo}</h5>
        <p class="card-text">{props.texto}
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{props.otrotexto}</small>
      </div>
    </div>
  </div>
 
</div>
        </div>
    )
}

export default Card
