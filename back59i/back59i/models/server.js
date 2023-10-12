const express = require ('express'); // lo que necesitamos para inicializar nuestro servidor

// Creamos un objeto
// en esta clase voy a recordar la sintaxis de objeto que será el servidor
class Server {  
    constructor (){
        this.app = express(); //this hace referencia a las propiedad del mismo objeto
        this.routes();
    }

// Los métodos iban aqui afuera del constructor pero son parte del objeto
routes(){
        this.app.get('/', function (req, res) {
        res.send('Hola comisión 59i')
        })

        }

listen(){
        this.app.listen(8080, ()=> {
        console.log("puerto corriendo")
        });
        }
}

module.export = Server;