const jwt = require('jsonwebtoken');

// token is decrypted
const decryptToken = (token ='') => {
    return jwt.verify( token ,process.env.SECRETORPRIVATEKEY);
}

module.exports ={

    decryptToken
}