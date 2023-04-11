const dotenv = require("dotenv")
dotenv.config();

const JWTDetails = {
    secret : process.env.JWT_SECRET_KEY,
    jwtExpiration : 3600,
};

module.exports ={
    JWTDetails
}