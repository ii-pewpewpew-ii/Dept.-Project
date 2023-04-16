const {tranporter, transporter} = require("../config/config");

const sendMail = async(html,subject,to)=>{
    var mailOptions = {
        to,
        subject,
        html
    };
    return new Promise((resolve,reject)=>{
        transporter.sendMail(mailOptions,async(err,info)=>{
            if (error) reject();
            resolve();
        })
    });
}

module.exports = {
    sendMail
}
