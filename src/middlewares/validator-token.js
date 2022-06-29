const { request, response } = require("express");

const validatorJWT = (req = request,res = response,next) =>{
    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(403).json({
            msg: ' no hay token en la peticion'
        });
    }

    try {
        // const { uid } = decryptToken( token );
        req.id_user = "id_user";
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({
            msg: ' no hay token en la peticion'
        });      
    }
}

module.exports = {
    validatorJWT
}