const { DataTypes,Sequelize } = require('sequelize');
const{ db } = require('../db/connection');

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
    created_at:{
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW 
    },
    id_user:{
        type: DataTypes.INTEGER
    },
    id_status_completion:{
        type: DataTypes.INTEGER
    }
});

module.exports = Task;