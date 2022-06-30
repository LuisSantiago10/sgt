const jwt = require('jsonwebtoken');

const decryptToken = (token ='') => {
    return jwt.verify( token ,process.env.SECRETORPRIVATEKEY);
}

module.exports ={

    decryptToken
}