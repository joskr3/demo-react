// rafce -> react arrow functional component -> componente tipo felcha

import React from 'react'

const MiTitulo = () => {
  console.log( "Hola mundo , esto se imprime , porque invoque al componente MiTitulo" )
  return (
    <div>
      <h1>
        Un titulo generico
      </h1>
      <h2>
        UN SUBTITULO GENERICO
      </h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, impedit repellendus. Delectus sint sunt voluptate laboriosam nisi maiores laudantium. Cum cupiditate dolore voluptatum hic ea praesentium ex sapiente porro repudiandae!
      </p>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis a laudantium voluptas repellat at maiores nostrum architecto, nobis officia incidunt, cumque provident obcaecati ea non cum dolore odit libero nemo!
        </p>
      </div>
    </div>
  )
}

export default MiTitulo
