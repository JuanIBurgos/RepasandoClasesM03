// Aqui desarrollo mi primer formulario
// import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

const MiComponentFormulario =()=>{
// DEFINO LOS ESTADOS YA QUE ELLOS SIEMPRE QUE CAMBIE DEBO USARLOS
const [field,setField] = useState (''); // para obtener el valor que ingreso en el input de Mensaje

// Funcion a la cual le digo que quiero que me escuche al input y cambie su valor
function handleChange (e){
    setField(e.target.value)
    // reemplaza al input = documen.getElementById('Id').value;
}


return(
    <>
        <h2 className="text-success">Mi Primer Formulario</h2>
        <Form action="">
            <div className="mb-3">
            <label htmlFor="message" > Mensaje: </label>
            <input type="text" id="message"  name="menssage" className="form-control" onChange={handleChange} value={field} placeholder="Ingrese un mensaje"/>
            
            </div>
        </Form>
    </>
)
}

export default MiComponentFormulario;