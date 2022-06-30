const express = require('express');
const cors = require('cors');
const {db,cretaDB,createTableTask,createTableTag} = require('../db/connection');


class Server{
    constructor(){
        this.app = express();
        this.port = 3500;
        this.path ={
            'task' : '/api/task',
        }

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try {
            
            await cretaDB();
            await createTableTask();
            await createTableTag();
            await db.authenticate();

        } catch (error) {
            throw new Error( error );
        }
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes(){
        this.app.use(this.path.task,require('../routes/task'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;