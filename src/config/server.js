const express = require('express');
const cors = require('cors');
const {db,cretaDB,createTableTask,createTableTag} = require('../db/connection');

// main class to instantiate everything needed to start the project
class Server{
    constructor(){
        //  starts express connection and db creation
        this.app = express();
        this.port = process.env.PORT;
        this.path ={
            'task' : '/api/task',
        }

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try {
            // connection validation and creation
            await cretaDB()
            createTableTask();
            createTableTag();
        } catch (error) {
            throw new Error( error );
        }
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes(){
        // all project main paths
        this.app.use(this.path.task,require('../routes/task'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;