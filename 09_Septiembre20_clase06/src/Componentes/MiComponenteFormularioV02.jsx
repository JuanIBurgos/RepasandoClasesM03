// Creo un Formulario de una manera distinta
import { useState } from "react";
import { Form } from "react-bootstrap";

function Formulario(){
    // Creamos los estados. Recordar que siempre debe ser const    
    // Como queremos englobar los estados de todos los input creo un objeto que coincide con el atributo name del input
    const [formData, setFormData] = useState (
        {
            nombre: "",
            email:"",
            mensaje:""
        })

    return(
        <>
        <form action="">
            <div>
                {/* Estructura para mi primer input */}
                <label htmlFor="nombre" >Nombre: </label>
                <input type="text"
                id="idNombre"
                name="nombre" 
                className=""/>
            </div>
            <div>
                <label htmlFor="email" >Email: </label>
                <input type="text"
                id="idEmail"
                name="email"
                className=""/>
            </div>
            <div>
                <label htmlFor="mensaje" >Mensaje: </label>
                <input type="text"
                id="idMensaje"
                name="mensaje"
                className=""/>
            </div>
        </form>
        </>
    )
}
 export default Formulario;