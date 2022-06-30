const { Sequelize } = require('sequelize');
const mysql = require("mysql2");

const BD_HOST = process.env.BD_HOST;
const BD_USER = process.env.BD_USER;
const BD_PASSWORD = process.env.BD_PASSWORD;
const BD_DATABASE = process.env.BD_DATABASE; 

const db = new Sequelize(BD_DATABASE,BD_USER,BD_PASSWORD,{
    host: BD_HOST,
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true,
      },
      dialectOptions: {
        dateStrings: true,
        typeCast: true,
      },
      timezone: 'America/Mexico_City',
      // operatorsAliases:0,
      // timezone:"+00:00"
    // logging: false
});


const cretaDB = () =>{
  // Open the connection to MySQL server
  const connection = mysql.createConnection({host:BD_HOST, user:BD_USER, password:BD_PASSWORD});
  // Run create database statement 
  connection.query(`CREATE DATABASE IF NOT EXISTS ${BD_DATABASE}`,(err, results) => {
      // console.log(results);
      // console.log(err);
    }
  );
  // Close the connection
  connection.end();
}

const createTableTask = () =>{
    // Importing the user model
    const Task = require('../models/task');
    // Creating all the tables defined in user
    Task.sync();
    Task.sync({force:true});
}


const createTableTag = () =>{
// Importing the user model
const Tag = require('../models/tag');
// Creating all the tables defined in user
Tag.sync();
Tag.sync({force:true});

}
module.exports = {db,cretaDB,createTableTask,createTableTag};