const Tag = require('../models/tag');

const listCreateTag = async(req,id_task) =>{
    const data = getParamasStringTag(req.body);
    if (data.tags != null) {
        let listTag = data.tags.split(",");
        for ( const name of listTag){
            createTag(name,id_task);
        }
    }
}

const listDeleteTag = async(id_task) =>{
    let result = { 'status':500,'info':{'msg':'Not found, the tag not found.'} };
    const tags = await findTagkByParams({id_task});
    if (tags.length > 0) {
        for ( const tag of tags){
            deleteTag(tag.id_tag,result);
        }
    }
}

const createTag = async(name,id_task ) =>{
    let result = { 'status':500,'info':{'msg':'Not found, Not sent tag.'} };
    try {
        const tag = new Tag({name,id_task});
        await tag.save();
        result = { 'status':200,'info': "create task and tag" };
    } catch (error) {
        result = { 'status':500,'info': {'msg' : error} };
    }
    return result;
}

const deleteTag = async(id_tag) =>{
    let result = { 'status':500,'info':{'msg':'Not found, Not sent tag.'} };
    try {
        const tag =  await findTagkById(id_tag);
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
    tags = Tag.findAll({
        where: {
            ...params
        },
        raw: true
      });

    return tags;
}

const getParamasStringTag = ( params ) =>{
    const { tags=null } = params;
    return { tags }
}

module.exports = {
    listCreateTag,listDeleteTag
}