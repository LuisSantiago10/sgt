const {decryptToken} = require('../helpers/jwt-access');

const getTokenForValidate = (req) =>{
    const token = req.header('Authorization');
    const data = decryptToken(token);
    return data;
}

module.exports = {
    getTokenForValidate
}