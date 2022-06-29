const { DataTypes,Sequelize } = require('sequelize');
const{ db } = require('../db/connection');

const Tag = db.define('tag',{
    id_tag:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    id_task:{
        type: DataTypes.INTEGER
    },
    name:{
        type: DataTypes.STRING
    },
    created_at:{
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW 
    }
});

module.exports = Tag;