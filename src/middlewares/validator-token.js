const { request, response } = require("express");

const validatorJWT = (req = request,res = response,next) =>{
    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(403).json({
            msg: 'no token in request'
        });
    }

    next();

}

module.exports = {
    validatorJWT
}