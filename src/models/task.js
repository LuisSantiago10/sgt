const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Task = db.define('task',{
    id_task:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    comment:{
        type: DataTypes.STRING
    },
    responsible:{
        type: DataTypes.STRING
    },
    date_delivery:{
        type: DataTypes.DATE
    },
    date_create:{
        type: DataTypes.DATE
    },
    id_user:{
        type: DataTypes.NUMBER
    },
    id_status_completion:{
        type: DataTypes.BOOLEAN
    }
});

module.exports = Task;