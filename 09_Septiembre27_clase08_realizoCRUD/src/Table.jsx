import { useState } from "react";
import EditForm from "./EditForm";
// Inciamos la implementación de CRUD en react junto con Bootstrap y tambien aqui tenemos instalado el react-Router-dom
// Creamos la parte visual de la tabla con una función de flecha 
const UserTable = (props) => {
    // Uso funcion de flecha para la creacion de la tabla 
    // Aqui le paso todo lo que tenga como props, podrias hacer un desencapsulamiento y pasar mas de una props.
    // No deseo colocar mas de un props pero la deseos pasar asi en "plural"
    // Recordar que aqui escribimos JS

    return(
        <>
        {/* Recordar que aqui escribimos HTML */}
        {/* Empiezo creando la tabla puedo traerla de bootstrap tambien para hacer mas sencillo */}

        <table className="table">
            <thead className="border table-primary">
                <tr>
                    <th>NOMBRE</th>
                    <th>USUARIO</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {/* Abro y cierro llaves para escribir JS en HTML */}
                {
                    // <h1>hay elementos</h1>
                    props.users.length > 0 ? (
                            props.users.map( (user) =>(
                                <tr key={user.id}>
                                 {/* Siempre requiere que el elmento que envuelve tenga una key */}
                                     <td>{user.nombre}</td>
                                     <td>{user.email}</td>
                                     <td>
                                         <div className="row">
                                                <button className="btn btn-warning mb-2"
                                                onClick={() => {props.editRow(user)}}>Editar</button>
                                                <button className="btn btn-danger mb-2"
                                                onClick={()=>props.deleteUser(user.id)}>Eliminar</button>
                                            {/* creo una función flecha porque si en el onClic coloco el llamado a la función entonces creo un bucle infinito */}
                                          </div>
                                    </td>
                                </tr>
                                ) 
                            )
                        // <tr>
                        //   <td> Hay elementos </td>
                        // </tr>
                        
                        ) : (
                              <tr>
                                 <td colSpan={3}> No hay usuarios</td>
                              </tr>
                            )
                }

                {/* AQUI FUNCIONA BIEN SOLO MAQUETADO */}
                {/* <tr>
                    <td>nombreDato01</td>
                    <td>usuarioDato01</td>
                    <td>
                        <div className="row">
                             <button className="btn btn-warning mb-2">Editar</button>
                             <button className="btn btn-danger mb-2">Eliminar</button>
                         </div>
                     </td>
                </tr>                  */}
            </tbody>
        </table>

        </>
    )
}

export default UserTable;