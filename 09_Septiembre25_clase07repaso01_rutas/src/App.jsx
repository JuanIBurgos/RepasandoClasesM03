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
        <Route path="/BarraDeNavegacion" element={BarraDeNavegacion01}/>
        {/* path es el "alias/nombre" con que quiero que aparezca en la barra de navegación  */}
        {/* component es donde se encuentra desarrollada la page */}
        <Route path="/SobreNosotros" element={SobreNosotros01}/>
      </Routes>
    
    {/* Para Realizar una barrita de navegación voy a ocupar un nuevo componente Link */}
    <Link to="./" >Inicio</Link>
    <Link to="/BarraDeNavegacion" element={BarraDeNavegacion01} >Contacto</Link>
    <Link to="/SobreNosotros" element={SobreNosotros01}>Sobre Nosotros</Link>

    <h1>Hola desde el APP</h1>

    </>
  )
}

export default App
