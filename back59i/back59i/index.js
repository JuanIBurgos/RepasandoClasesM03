// Back
// Bases de Datos
// Front


//const express = require('express')  // reemplaza la importación 
//const app = express()               // a traves del app puedo acceder a todos sus metodos y propiedad  

// Accedo desde el app a cada uno de sus métodos
//app.get('/', function (req, res) {
  //res.send('Hola comisión 59i')
//})

// app.listen(3000) // Aqui configuramos nuestro puerto, a que puerto escucha. 

// para probar que esto funciona debemos colocar el comando
// node index.js
// voy a un navegador y coloco  localhost:3000
// Cada vez que haga un cambio debe volver a colocar el node index.js en la consola


// Como ya tengo definido el server ya no necesito lo anterior y lo reemplazo por
const Server = require('./models/server');
const server = new Server(); // instancio al objeto


server.listen(); // como el listen es un método requiere los parentesis

