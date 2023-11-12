// Aqui generaremos el formulario

import { useState } from "react";

// Armo el componente con una función arrown 
const FormularioCRUD = (props) =>{
    const inicialFormularioEstado = {
        id: null,
        nombre:'',
        email: ''
    } 
    // DEBE COINCIDIR CON EL name que le coloco a cada input del formulario

    // Aqui creo la variable con estado user porque debe ser un solo usuario,
    // con su estado inicial del que acaba de crear
    const [user, setUser] = useState(inicialFormularioEstado);
    
    // Realizo la funcion que permite capturar los cambios 
    // Recuerdo que debo escuchar el evento por eso en parentesis lo tomo
    const handleInputChange = (event) => {
        // Debo capturar los datos del formulario y lo que cambio por lo tanto:
        // desestructuro,pidiendo el name del input que cambio y el valor que cambio. 
        const {name, value} = event.target
        // 1º47''
        // Ahora como ya tengo lo que cambio debo realizar el set de eso parque el estado inicial cambie
        setUser ({...user, [name] : value })
        // Abro llaves porque estoy realizando desestructuración
        // los 3 puntos y user (...user) me realizan una copia de lo que ya tenia
        // pero ademas me vas a obtener el nombre de ese campo [name] y obtenemos el valor.
        // Los corchetes son porque estoy accediendo al HTML. 
        // HASTA AQUI CONFIGURAMOS NUESTROS INPUTs, AHORA NOS FALTA AL FORMULARIO AGREGARLE EL EVENTO DEL SUBMIT.
        // EL SUBMIT ES EL EVENTO QUE VA A ESCUCHAR EL ENVIO COMPLETO
        }

    return(
        <>
        {/* Suponemos que vamos a pedir nombre, usuario y email */}
        <form action="" onSubmit={
                event => {
                    event.preventDefault();
                    if (!user.nombre || !user.email ) return
                        props.addUser(user);
                        setUser(inicialFormularioEstado);
                    }
                }
                > 
            <div className="mb-3">
                <label htmlFor="" >Nombre</label> 
                <input type="text"
                    name="nombre" 
                    // id="nombre" 
                    className="form-control" 
                    value={user.nombre}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="" >Email: </label>
                <input type="email" 
                    name="email" 
                    // id="email" 
                    className="form-control" 
                    value={user.email}
                    onChange={handleInputChange}
                />
            {/* el value le digo como va a comenzar */}
            </div>
            <button className="btn btn-primary">Enviar</button>
        </form>
        </>
    )
}

export default FormularioCRUD;