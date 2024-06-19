import React from 'react'

interface Props {
  titulo: string;
  color?: string;
  onClick?: () => void;
}



const Boton = ({ titulo,onClick}: Props) => {


  return (
    <>
      <button type='button' onClick={onClick}>
        {titulo}
      </button>
      <small>
        descripcion del boton <strong>General</strong>
      </small>
    </>

  )
}

export default Boton
