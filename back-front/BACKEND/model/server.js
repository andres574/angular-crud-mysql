
const express=require('express')



class Server{


    constructor(){
        this.app = express();
        this.PORT = process.env.PORT ;
        this.afiliadosPath = '/api/afiliado';
        this.documentosPath = '/api/documentos';
        this.sisbenPath = '/api/nSisben';

        this.middlewares();
        this.routes();
    }



    middlewares(){    

        // parse y lectura de body
        this.app.use(express.json());
      
    }

    routes() {
        this.app.use(this.afiliadosPath, require('../routes/afiliados.routes'));  
        this.app.use(this.documentosPath, require('../routes/documentos.routes')); 
        this.app.use(this.sisbenPath, require('../routes/sisben.routes'));         
    }
    

    listen() {
        this.app.listen(this.PORT, () => {
            console.log('servidor corriendo en el puerto:', this.PORT);
        })
    }


    





    
}
module.exports = Server;
