import { useEffect, useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
function App() {
  // Comenzamos el uso del useEffect 49'
  // Declaramos los useState
  const [clicks, setClicks] = useState(0);
  const [test,setTest] = useState ('Hola'); // Creamos una segunda variable luego de probar la primera 56'
  
  // Llamamos al useEffect 53'  
  
  // FORMA 01 DE USAR EL USEEFFECT
  // useEffect(()=>{
     // Este primer useEffect se ejecuta cada vez que hago clic
    // porque el useEffect esta escuchando cada vez que el componente se monta
  // console.log("Holis me acabo de ejecutar")
  // } // Forma 01
  // dentro de los parentesis lleva una arrow function
  // Ejecuta en cada clic el código que tiene definido adentro y en cada actualización de la misma.

  // FORMA 02 DE USAR EL USEEFFECT
  // useEffect(()=>{
  // console.log("Holis me acabo de ejecutar")
  // },[test],[clicks] // Forma 02 es decir la que usa el test
  // Ejecuta el código que tiene dentro, en el montaje y en cada actualización en particular (Según se lo indiquemos con el estado)
  // )

  // FORMA 03 DE USAR EL USEEFFECT
  useEffect(()=>{
  console.log("Holis me acabo de montar")
  return()=>{
    console.log("Me acabo de desmontar")
    }
  },[clicks])
  // Puedo colocarle o no algun estado, si no colocao no me aprece desmontar porque nunca actualice algun estado,
  // me falta especificar que estado debo escuchar. 
  // Aquí recordemos que el ciclo de vida de un componente tiene 3 pasos montado, actualización y desmontado. 

    

  return (
    <>
      <h1>Estamos aqui tranquilos</h1>
      
      <Button onClick={()=> setClicks(clicks + 1)} variant="primary">{clicks}</Button>
      {/* Si llamo a clicks desde el boton lo primero que vería sería cero
          Llamo a un escuchador evento que es el onClick y llamo al setClicks (este maneja el cambio del valor del clicks)
          Si abro y cierro parentesis se hace una bucle infinito, por lo tanto realizo
          una function callBack ()=>; de esta forma no se va a producir un bucle infinito.
      */}

      {/* Defino un segundo boton para probar la 2da variable.
      Este boton sería para mostrar como se haría el cambio en el segundo cambio del useEffect  */}
      <Button onClick={()=> setClicks(clicks+1)} variant="success">{test}</Button>

      {/* Nosotros tenemos 3 formas de usar el useEffect. */}

    </>
  )
}

export default App
