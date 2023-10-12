// Aqui desarrollaremos la de un formulario de una manera distinta y mas corta que MiFormulario01
import React, {useState} from "react";
//Como uso el componente/elemento Form de bootstrap debo realizar el import correspondiente
import { Form } from "react-bootstrap";
// Importamos el boton 
import Button from 'react-bootstrap/Button';



const MiFormulario02 = () =>{
// declaro los estados que pertenecen a los input del formulario siempre const
// Aqui queremos agrupar todos los estados de los input de mi formulario en un solo estado. 
// Creo un objeto que contenga todos en la declaración del estado incial
// El atribributo de objeto hace referencia al name del input.
// En el input el id solo me sirve en este caso para linkearlo al label correspondiente. (Buena Practica)
// Reemplazo los form por Form, los div por Form.Group, los label por Form.Label y los input por Form.Control
const [datosDelFormulario, setDatosDelFormulario] = useState(
        {
            nombre: '',
            email: '',
            mensaje: ''
        }
);

// Funcion para manejar los cambios de estados 1º19'30''
function manejadorDeCambios(e){
// Le paso un evento, para la desestructuración de los valores dentro e un objeto
const {name, value} = e.target;
setDatosDelFormulario ({
    [name]: value
    });
};

//Declaramos un función para que escucle el evento e y lo detenga asi no se refresca el formulario
const manejadorSubmit = (e) =>{
e.preventDefault();
// quiero ver por consola que tiene datosDelFormulario
console.log(datosDelFormulario);
}

return(
    <>
    <h1 className="text-success"><b>--- FORMULARIO VERSIÓN 02---</b> </h1>
    <Form action="" onSubmit={manejadorSubmit}>
        <Form.Group className="my-3">
            <Form.Label htmlFor="nombre" className="mx-3">Nombre: </Form.Label>
            <Form.Control 
            type="text" 
            id="nombre" 
            name="nombre" 
            placeholder="Su nombre es... "
            className=""
            value={ datosDelFormulario.nombre} 
            onChange={manejadorDeCambios} 
            />
            {/* RECORDAR: tanto el htmlFor del label como el id del input deben coincidir  */} 
        </Form.Group>

        <Form.Group className="my-3">
            <Form.Label htmlFor="email" className="mx-2">Email: </Form.Label>
            <Form.Control 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Introduzca su email valido"
            className="" 
            value={ datosDelFormulario.email} 
            onChange={manejadorDeCambios} 

            />
            {/* RECORDAR: tanto el htmlFor del label como el id del input deben coincidir  */} 

        </Form.Group>

        <Form.Group className="my-3">
            <Form.Label htmlFor="mensaje" className="mx-2">Mensaje: </Form.Label>
            <Form.Control 
            as="textarea" 
            id="mensaje" 
            name="mensaje" 
            placeholder="Escriba su mensaje"
            className=""
            value={ datosDelFormulario.mensaje} 
            onChange={manejadorDeCambios} 
            />
            {/* RECORDAR: tanto el htmlFor del label como el id del input deben coincidir  */} 
        </Form.Group>

        <Button variant="success" type="submit">Enviar mensaje</Button>
        {/* Como es de tipo submit el boton va a estar escuchando a una función que le vamos poner 
        al formulario completo. */}
    </Form>

    </>
)
}

export default MiFormulario02;