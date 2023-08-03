const express = require("express");
const cors = require('cors');

class Server {
  
    constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usariosPath = '/api/usarios';

    // Middlewares
    this.midedlewarse();


    // rutas app
    this.routes();
  }

  midedlewarse(){

    // Cors
    this.app.use( cors() );

    //Parseo y lectura de body
    this.app.use( express.json() );


    // Directorio punlico
    this.app.use( express.static( 'public' ) );

  }

  routes() {

    this.app.use( this.usariosPath, require('../routes/usarios'));

  }

  listen() {
      this.app.listen( this.port, () => {
      console.log("Servidor listo en el puerto", this.port);
    });
  }
}

module.exports = Server;
