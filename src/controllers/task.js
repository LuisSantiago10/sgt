const { response,request } = require('express');
const Task = require('../models/task');
const {listCreateTag,listDeleteTag} = require('./tag');


const getTasks = async(req = request, res = response) =>{
    const tasks =  await Task.findAll({raw:true});
    return res.status(200).json({tasks});
}

const getTaskById = async(req = request, res = response) =>{
    const task =  await findTaskById(req.params.id);
    return res.status(200).json(task);
}

const createTask = async(req = request, res = response) =>{

    let result = { 'status':500,'info':{'msg':'Error, I not create task.'} };
    const data = getParamasForTask(req.body);
    // data.create_at = new Date().toLocaleDateString();
    data.id_user = 4;    
    try {
        const task = new Task({...data});
        await task.save();
        await listCreateTag(req,task.id_task);
        result = { 'status':200,'info': {'msg' : "create task and tag"} }
    } catch (error) {
        result = { 'status':500,'info': {'msg' : error} }
    }
    return res.status(result.status).json(result.info);
}

const updateTask = async(req, res = response) =>{
    let result = { 'status':500,'info':{'msg':'Error, I not find task.'} };
    let task =  await findTaskById(req.params.id);
    if (task != null) {
        try {
            const data = getParamasForTask(req.body);
            task.set( {...data} );
            await task.save();
            await listDeleteTag(req.params.id);
            await listCreateTag(req,req.params.id);

            result = { 'status':200,'info': task };
        } catch (error) {
            result = { 'status':200,'info': { 'msg' : error } };
        }
    }
    return res.status(result.status).json(result.info);
}

const deleteTask = async(req, res = response) =>{
    let result = { 'status':500,'info':{'msg':'Error, I not find task.'} };
    const task =  await findTaskById(req.params.id);
    if (task != null) {
        try {
            await task.destroy();
            await listDeleteTag(task.id_task);
            result = { 'status':200,'info':{ 'msg':'Delete succees'} };
        } catch (error) {
            result = { 'status':200,'info': { 'msg' : error } };
        }        
    }
    return res.status(result.status).json(result.info);
}


const getParamasForTask = ( params ) =>{
    const { title,description,id_status_completion,date_delivery,
            comment=null,responsible=null } = params;
    return {
        title,description,id_status_completion,
        date_delivery,comment,responsible
    }
}

const findTaskById = (id_task) =>{
    return Task.findByPk(id_task);
}

module.exports = {
    getTasks,createTask,getTaskById,updateTask,deleteTask
}