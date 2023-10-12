import { useEffect, useState } from 'react'
import './App.css'

// En este arvhivo consumiremos una API
function App() {
  // Como cada vez que queremos hacer un cambio necesitamos definir un State con un valor inicia
  const [equipo,setEquipos] = useState ([]);
  // El estado incial es una array vacio, esperando completarse con los datos en formato JSON
  
  // Ahora declaro el useEffect
  useEffect(()=>{
    console.log('use effect');
    obtenerDatos()  
  },[])

  // Aparte del useEffect voy a necesitar una función para obtener los datos 
  // Necesito consumir una API, para lo cual necesito realizar un pedido externo a esa API,
  // cuando la API me responda veré que voy a hacer con esos datos  15' (PETICIÓN ASINCRONA)
  // usamos el async porque la petición es asi
  const obtenerDatos = async() =>{
    // petición de tipo fetch
    const data= await fetch ('https://jsonplaceholder.typicode.com/users') // guardo en un variable la petición para luego realizar algo
    // como requiere esperar la respuesta del fetch coloco awai

    // El tipo de dato de data es de tipo JSON 
    const users = await data.json();
    console.log(users); // quiero ver lo que trae del pedido.

    // USO LA VARIABLE Y LA FUNCIÓN DEL ESTADO
    setEquipos(users);
  }

  return (
    <>
      <h1>Holas soy la App</h1>
      {equipo.map(
        jugador => <div>
                 <li>{jugador.name }</li>
                 <li>{jugador.username }</li>
                 <li>{jugador.email}</li>
                 <br />
                </div>
      )}
    </>
  )
}

export default App
