import React from 'react'

interface Props {
  titulo: string;
  numeroDeVecesRealizado: number
  esSaludoFormal?: boolean
}

const MiOtroSaludoFormal = ({ titulo = "", numeroDeVecesRealizado = 0, esSaludoFormal }: Props) => {
  return (
    <>
      <div>MiOtroSaludoFormal {titulo}</div>
      <p>Te salude {numeroDeVecesRealizado} veces</p>
      {
        esSaludoFormal ? <p>Si es un saludo formal</p> : null
      }
    </>
  )
}

export default MiOtroSaludoFormal
