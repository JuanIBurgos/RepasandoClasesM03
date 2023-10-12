import { useState } from 'react'
import './App.css'
import MiComponentFormulario from './Componentes/MiComponenteFormulario'
import Formulario from './Componentes/MiComponenteFormularioV02'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola Comisión 59i</h1>
      {/* <MiComponentFormulario/> */}
      <Formulario/>

    </>
  )
}

export default App
