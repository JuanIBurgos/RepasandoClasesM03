import { useEffect, useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
function App() {
  // DEFINIMOS LOS ESTADOS 
  const [state01, setState01] = useState ("Hola 01");
  const [state02, setState02] = useState ("Hola 02");
  const [state03, setState03] = useState ("Hola 03");

  // DEFINIMOS LOS USEEFFECT
  useEffect(()=>{
    console.log("me monte")
    return(
      ()=>{
        console.log("Desmontaje")
      }
    )
  },[state01],[state02],[state03])

  return(
    <>
      <div>
        <Button variant='primary' className='mx-3' onClick={ ()=> setState01('Chau01')} >{state01}</Button>
        <Button variant='secondary' className='mx-3' onClick={ ()=> setState02('Chau02')} >{state02}</Button>
        <Button variant='success' className='mx-3' onClick={ ()=> setState03('Chau03')}>{state03}</Button>

      </div>
    </>
  )
}

export default App
