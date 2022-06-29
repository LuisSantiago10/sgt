const Tag = require('../models/tag');

const listCreateTag = async(req,res,id_task) =>{
    let result = { 'status':500,'info':{'msg':'Not found, Not sent tag.'} };
    const data = getParamasStringTag(req.body);
    if (data.tags != null) {
        let listTag = data.tags.split(",");
        for ( const name of listTag){
            result = await createTag(name,id_task,res);
        }
    }
    return res.status(result.status).json(result.info);
}

const listDeleteTag = async(id_task,req = request, res = response) =>{
    console.log(id_task);
    let result = { 'status':500,'info':{'msg':'Not found, the tag not found.'} };
    const tags = findTagkByParams({id_task});
    if (tag != null) {
        tags.forEach( function({id_tag}, indice, array) {
            deleteTag(id_tag,result);
      });
    }
    return res.status(result.status).json(result.info);
}

const createTag = async(name,id_task,res ) =>{
  
    let result = { 'status':500,'info':{'msg':'Not found, Not sent tag.'} };
    try {
        const tag = new Tag({name,id_task});
        await tag.save();
        result = { 'status':200,'info': "create task and tag" };
    } catch (error) {
        result = { 'status':500,'info': {'msg' : error} };
    }
    return {...result};
}

const deleteTag = async(id_tag,result) =>{
    try {
        const tag =  await findTaskById(id_tag);
        await tag.destroy();
        result = { 'status':200,'info':{ 'msg':'Delete succees'} };
    } catch (error) {
        result = { 'status':200,'info': { 'msg' : error } };
    }        
    return result;
}

const findTagkById = (id_tag) =>{
    return Tag.findByPk(id_tag);
}

const findTagkByParams = (params) =>{
    Pag.findAll({
        where: {
          ...params
        }
      });
}

const getParamasStringTag = ( params ) =>{
    const { tags=null } = params;
    return { tags }
}

module.exports = {
    listCreateTag
}