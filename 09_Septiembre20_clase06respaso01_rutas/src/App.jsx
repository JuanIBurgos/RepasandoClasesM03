import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import BarraDeNavegacion01 from './componentes/BarraDeNavegacion01'
import SobreNosotros01  from './componentes/SobreNosotros01'


function App() {
 
  return (
    <>
      {/* APLICAMOS EL ROUTER BROWSER A TRAVÉS DE LA ETIQUETA Routes y Route */}
      <Routes>
        <Route path="/BarraDeNavegacion" Component={BarraDeNavegacion01}/>
        {/* path es el "alias/nombre" con que quiero que aparezca en la barra de navegación  */}
        {/* component es donde se encuentra desarrollada la page y lo que queremos mostar en la page */}
        <Route path="/SobreNosotros" Component={SobreNosotros01}/>
        {/* <Route path='/' Component={App}></Route> */}

      </Routes>
    
    {/* Para Realizar una barrita de navegación voy a ocupar un nuevo componente Link */}
    {/* <Link to="./" >Inicio</Link> */}
    {/* El componete Link requiere una propiedad obligatoria que es to debo haber definido la ruta antes en el Routes
    es importante tambien configuara la ruta inicial */}
    <Link to="/">Inicio</Link>
    <Link to="/BarraDeNavegacion"  >Contacto</Link>
    <Link to="/SobreNosotros">Sobre Nosotros</Link>

    <h1>Hola desde el APP</h1>

    </>
  )
}

export default App
