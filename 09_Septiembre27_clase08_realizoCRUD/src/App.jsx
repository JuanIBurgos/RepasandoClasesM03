import { useState } from "react";

import "./App.css";
// Se importa cuando llame al componente
// Recoradar que el componente se llama UserTable y el archivo donde se encuentra se llama Table.jsx
import UserTable from "./Table";
import FormularioCRUD from "./Formulario";
import EditForm from "./EditForm";

function App() {
  // Aqui creamos los datos para poder hacer uso de ellos en el componente tabla
  // Esto se llama hardcodear datos
  const userData = [
    { id: 1, nombre: "Juan", email: "juan@gmail.com" },
    { id: 2, nombre: "Jose", email: "jose@gmail.com" },
    { id: 3, nombre: "Joaquin", email: "joaquin@gmail.com" },
  ];

  // Creo un estado
  // Como este estado representa al uso de los datos, el useState comienza con el array userData (el que tiene los datos)
  const [users, setUsers] = useState(userData);

  //Como voy a tener un formulario (FormularioCRUD) que me va a permitir crear un nuevo usuario
  // En el APP voy a crear la función que me va a permitir crear nuevos usuarios

  const addUser = (user) => {
    user.id = users.lenth + 1;
    setUsers([...users, user]);
  };

  // REALIZO LA FUNCIÓN DELETE 1º 15'
  // realizo con la función de flecha, que recibe un id para saber que usuario eliminar
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    // Digo que traiga el que sea distinto a ese id y ese es el arreglo que quiero.
    // Con el setUsers ya estoy actualizando el arreglo de usurios.
  };

  // Creamos un estado para la edición 1º37'35''
  const initialFormState = {
    id: null,
    name: "",
    email: "",
  };
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // REALIZO LA FUNCIÓN PARA EDITAR EL USUARIO
  const editRow = (user) => {
    setEditing(true); // pongo en verdadera la bandera
    setCurrentUser({ id: user.id, name: user.name, email: user.email });
    // antes de actualizar usuario esta función nos permite realizar la edición.
    // editRow nos va editar la fila por eso el nombre.
    // primero me fijo si esta editando y pongo en true si esta editando.
    // Luego actualizo el nuevo estado de setCurrentUser con las propiedades correspondientes. (desestructuro)
    // Aqui obtengo cada campo
  };
  // A esta función nos permite realizar la actualización
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <>
      <h1>Holis desde el APP.jsx</h1>
      <div className="row">
        {
          // Agrego esto para implementar el editar 1º45'
          // Uso el ser para cuando edito toda la fila es decir uso el set
          editing ? // Pregunto si esta editando 
          (
            // Si esta editando crea abre el componente para editar
            <>
              <div className="col-xl-6 col-md-10 col-sm-12">
              <h2>Editando</h2>
              {/* Muestro el componente que acabo de crear para la edición paso datos por props
              Ver que paso no tan solo funciones sino el estado que necesita la función ver los colores
              que me indican tal diferencia. 
              */}
              <EditForm setEditing={setEditing} updateUser={updateUser} currentUser={currentUser}/>
              </div>
            </>
          ) : (
            // Si no esta editando crea muestra el componente de crear una usuario paso datos por props
            <>
              <h2>Creando</h2>
              <div className="col-xl-6 col-md-10 col-sm-12">
                <FormularioCRUD addUser={addUser} />
                {/* al formulario le voy a pasar la función addUser, ya que el formulario se encuentra en otro archivo
                y necesito pasarle información por aqui. primer addUser es el nombre de la prop y addUser entre llaves 
                es lo que le paso, es decir la función. */}
              </div>
            </>
          )
        }

        <div className="col-xl-6 col-md-10 col-sm-12">
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
          {/* Uso las props para pasar información de un componente a otro, 
          de esta manera paso los datos de los usuarios.
          Le vamos a pasar users es decir usuarios que esta en users de la definicion de estado.
          Estos son los datos del estado incial, es decir el arreglo userData.*/}
        </div>
      </div>
    </>
  );
}

export default App;
