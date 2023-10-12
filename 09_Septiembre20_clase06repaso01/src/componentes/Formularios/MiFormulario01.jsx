// Aqui desarrollaremos la primera versión de un formulario (es la mas larga)
import React, {useState} from "react";
//Como uso el componente/elemento Form de bootstrap debo realizar el import correspondiente
import { Form } from "react-bootstrap";


const MiFormulario01 = () =>{
//DECLARO LAS VARIABLES Y SUS ESTADOS INICIALES
const [campoMensaje, setCampoMensaje]=useState(''); // Este tomara el valor del estado input mensaje
const [campoNombre, setCampoNombre]=useState(''); // Este tomara el valor del estado input mensaje


//DECLARO LA FUNCION QUE REALICE EL CAMBIO DE ESTADO
function manejadorDeMensaje (e){
    setCampoMensaje(e.target.value); //le paso desde el formulario el evento e y accedo al valor
    // aqui capturamos valores, en JS era getDocumentById('id').value
    // console.log(e.target.value) //Probamos en consola el valor que vamos ingresando. 
}
function manejadorDeNombre(e){
    setCampoNombre(e.target.value);
}

return (    <>
    <h2 className="text-success">--- FORMULARIO VERSIÓN 01 ---</h2>
    <Form action="">
        <div className="mb-3">
        <label htmlFor="mensaje" className="mx-3" >Mensaje</label>
        {/* htmlFor es un atributo del label que debe coincidir con el Id que le colocaremos a nuestro input */}
        
        <input type="text" id="mensaje" name="mensaje" onChange={manejadorDeMensaje} value={campoMensaje} placeholder="Ingrese un mensaje" className="Form-control" />
        {/* Cuando io coloco el id es para saber que el input corresponde al label */}
        {/* El name es lo mas importante a la hora de conectar un formulario ya que a través de él vamos a obtener el valor del input. */}
        {/* Tambien puede ser que a través del id hagamos algo desde una función. */}
        {/* En este caso sabesmos que hoy para conectar el formulario usamos el name. */}
        {/* Form-control lo que permitia es que el input se vea mas grande y los bordes sean redondeado  */}
        </div>

        <div className="mb-3">
        <label htmlFor="nombre" className="mx-3" >Nombre: </label>
        <input type="text" id="nombre" name="nombre" onChange={manejadorDeNombre} value={campoNombre} placeholder="Ingrese su nombre" className="Form-control" />
        </div>
    </Form>
    </> 
)
}

export default MiFormulario01;