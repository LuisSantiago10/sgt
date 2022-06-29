const { Sequelize } = require('sequelize');

const BD_HOST = 'localhost';
const BD_USER = 'root';
const BD_PASSWORD = '';
const BD_DATABASE = 'sgt'; 

const db = new Sequelize(BD_DATABASE,BD_USER,BD_PASSWORD,{
    host: BD_HOST,
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true,
      },
      // operatorsAliases:0,
      // timezone:"+00:00"
    // logging: false
});

module.exports = db;