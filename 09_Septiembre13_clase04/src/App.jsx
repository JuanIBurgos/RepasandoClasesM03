import { useState } from 'react';
import './App.css'
import Children from './Childen';

function App() {
  // Coloco codigo JS
  // Siempre se desea todos los estados al inicio de la funcion todos agrupados en esta parte del código. 
  const [fecha, setFecha] = useState ('11 de septiembre');
  // Realizamos el contador que carga Vite  
  const [contador, setContador] = useState (0);
  // contador es el nombre del estado inicial del componente
  // setContador es la función que va a hacer que el estado cambie
  // El useState al llamarlo le digo como va a inicia. Con el tipo de dato coloco allí se setea que sera el estado inicial

  // Props segunda parte -------------------------------------------------------------------------------
  // Funcion para cambiar la fecha
  function cambiarFecha(){
    // como trabajo con el estado debo escribirla luego definir el estado
    if (fecha==="11 de septiembre"){
      setFecha('12 de septiembre');
      // cambiado ahora en donde voy a mostrar
    }else {
      setFecha('11 de septiembre');
    }
  } 
  
  // Defino la función para cambiar el contador
  
  // Props primera parte -------------------------------------------------------------------------------
  const title="Hola amigo soy un texto de props";
  const content="Soy otro texto de props";
  // Ahora creo los componentes: Todos los componentes deben ser creados en la carpeta SRC.
  const funSum = num => {
    return (num+2)
  }
 
  return (
    <> 
    {/* Codigo HTML */}
    <Children title={title} content={content} sum={funSum} />
    {/* Repasamos los estados */}
    <h1>{fecha}</h1>
    <button onClick={cambiarFecha} variant='danger'>Clic here</button>

    {/* creo el boton para aumentar el contador - Deber ser una arrow function ()=> para no caer
    en un bucle infinito infinito  */}
    <h2>Cuenta: {contador}</h2>
    {/* puedo mostrar en el boton y usar la arrow function */}
    <button onClick={()=>setContador(contador+1)}>{contador}</button> 

    </>
  )
}

export default App
