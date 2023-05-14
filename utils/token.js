const jwt = require("jsonwebtoken")
const {JWTDetails} = require("../config/config")

// const getToken = (request) => {
//     var token = null;

//     request.headers && request.headers.cookie.split(';').forEach(function(cookie) {
//         var parts = cookie.match(/(.*?)=(.*)$/)

//         if(parts && parts[1] == "accessToken"){
//             token = parts[2]
//         }
//     });

    // return token
//};


const verifyToken = (token) => {
    if(!token) return null;

    try{
        const decoded = jwt.verify(token,JWTDetails.secret);
        return decoded;
    }
    catch (err){
        console.error(error)
        return null;
    }
}

module.exports = {
    verifyToken
}