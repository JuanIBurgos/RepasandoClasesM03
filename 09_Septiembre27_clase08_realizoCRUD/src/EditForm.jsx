// El comando que nos devuelve el componente creado y con su return rafce
import React from 'react'
import { useState, useEffect } from 'react'

const EditForm = (props) => {
    // Creo los estados que van dentro del editar 
    // Teniendo en cuenta que este será user en singular y en los otros sera en plural
    // Sabiendo que iniciará en la props con un current user que veremos como lo completamos
    const [user, setUser] = useState (props.currentUser) // Queremos modificar el usuario seleccionado.

    // Creamos la función del handleInputChange
    const handleInputChange = (event) => {
        // Aqui desestructuramos el nombre del input y obtener su valor, es decir obtenemos el valor de sus elementos
        const {name, value} = event.target
        //ahora actualizamos el estado. Comp no quiero sobre escribir el array uso los ... para la copia y agrego algo mas. 
        setUser({...user, [name] : value}); // del campo name tomame el valor y copialo a ese array inicial
    }
// Creo la función flecha de useEffect para actualizar el usuario. 1º49'
useEffect(()=>{
    setUser(props.currentUser)
    },[props]
    // Especifico al estado que quiero escuchar. 
  )


  return (
    <>
    <div>Editar Formulario</div>
    <form action="" onSubmit={ (event) =>{
            event.preventDefault();
            props.updateUser(user.id, user)
            // Esta función updateUser se encuentra creada en el App.jsx
            }
        }>
        <input type="text" 
        name="nombre" 
        value={user.name} 
        onChange={handleInputChange}
        />
        {/* onChange es el que escucha el cambio de input y retiene/actualiza el valor.
        El onClick es el que escucha el cambio de evento es decir cada vez que se ejecuta un click
        en el boton. */}
        {/* La función handleInputChange es la que toma el cambio del input */}
        <input type="email" 
        name="email" 
        value={user.email} 
        onChange={handleInputChange}
        />

        <button className='btn btn-primary' onClick={props}>Actualizar</button>
    </form>

    </>
  )
}

export default EditForm