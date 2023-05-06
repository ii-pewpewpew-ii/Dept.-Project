const dotenv = require("dotenv")
dotenv.config();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host : "smtp.gmail.com",
    port : 465,
    secure : true,
    service : "gmail",
    auth : {
        user : process.env.SOURCE_EMAIL,
        pass : process.env.SOURCE_APPPASSWORD
    }
})

const JWTDetails = {
    secret : "process.env.JWT_SECRET_KEY",
    jwtExpiration : 3600,
};

module.exports ={
    JWTDetails,
    transporter
}