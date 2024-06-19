import { useState } from 'react'
import './App.css'
import * as React from 'react'
import MiSaludo from './components/MiSaludo'
import MiOtroSaludoFormal from './components/MiOtroSaludoFormal'
import Boton from './components/Boton'


function App() {

  return (
    <>  
      <MiSaludo titulo="El mejor saludo del mundo mundial galactico" />
      <MiOtroSaludoFormal titulo='Este es un saludo galactico' numeroDeVecesRealizado={10} />
      <Boton titulo='Mi boton cool' />
      <Boton titulo='Mi boton cool 1' color="azul"/>
      <Boton titulo='Mi boton cool 2' />
      <Boton titulo='Mi boton cool 3' />
      <Boton titulo='Mi boton cool 4' onClick={()=>{console.log("HIZE CLICK EN EL BOTON 4")}} />

      <h1>
        Hola mundo
      </h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => console.log( "Hola mundo" )}>
          count is
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <footer>

      </footer>
    </>
  )
}

export default App
