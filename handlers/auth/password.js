const crypto = require("crypto");
const utils = require("../../utils/mail")
const bcrypt = require("bcrypt");
const {Admin,Verification,Scholar} = require("../../schemas/roles");
const { token, sendMail } = require("../../utils");
const saltRounds = 10;
/*
    path : /api/auth/forgot-password
    method : post
    params : email
    response : {}

*/

const forgotPassword = async(req,res) => {
    try{
        const mail = req.body.mail
        const isAdmin = await checkAdmin(mail);
        const isScholar = await checkScholar(mail);
        var linkCode;
        if(isAdmin || isScholar) {
            if(isAdmin)
                linkCode = crypto.randomBytes(4).toString("hex");
            if(isScholar)
                linkCode = crypto.randomBytes(5).toString("hex");    
            try{
                var id;
                const obj = await Verification.findOne({
                    where : {
                        emailid : mail
                    }
                }).then(async (data) => {
                    if(data) {
                        const updatedData = await data.update({
                            verifyId : data.verifyId,
                            linkCode : linkCode,
                            emailid : mail,
                            expireTime : (Date.now() + 24*60*60)
                        })
                        id = updatedData.verifyId
                    }
                    else{
                        const newRecord = await Verification.create({
                            linkCode : linkCode,
                            emailid : mail,
                            expireTime : (Date.now() + 24*60*60)
                        })
                        id = newRecord.verifyId
                    }
                }).then((data) =>{
                    const mailLink = "localhost:3000/password-set/" + id + "/"+ token;
                
                    const html = `<h3> Reset Link :</h3>
                                  <p><a>${mailLink}</a></p>`;
                    const subject = `Password reset link : Expires on${data.expireTime}`;

                    //import mail utility after configuring transporter 
                    const isSent = sendMail.sendMail(html,subject,mail);
                    if (isSent) {
                        return res.status(200).json({ message : "Success" })
                    }else{
                        return res.status(500).json({message : "Server Error"});
                    }
                })
                .catch((err) => {
                    return res.status(500).json({message : "Server Error"});
                })
            }
            catch(err){
                console.error(err);
                return res.status(500).json({message : "Failure"});
            }

        }
        else {
            return res.status(500).json({message : "Unauthorized User"});
        }
        
    }
    catch(err){
        console.error(err.message);
        res.status(500).send({message : "Failure"});
    }
}

/*
    PATH : /api/auth/set-password 
    POST : userId , linkCode 
    RESPONSE : {message:Success}
               {message:Failure}
*/

const setPassword = async(req,res) => {
    try{
        const uid = req.data.userId;
        const linkCode = req.data.linkCode;
        const obj = await Verification.findOne({
            where : {
                verifyId : uid,
                linkCode: linkCode,
            }
        })

        if(!obj){
            return res.status(400).send({message : "Invalid Uid or link"});
        }
        else{
            if(Date.now() - obj.expireTime < 0){
                return res.status(400).send({message : "Link Expired"});
            }
            else if(obj.linkCode.length === 8){
                const AdminUser = await Admin.findOne({
                    where : {
                        emailid : obj.emailid
                    }
                })
                if(!AdminUser){
                    return res.status(400).send({message : "Invalid mailId"});
                }
                else {
                    var newPassword = req.body.password;
                    bcrypt.genSalt(saltRounds,async (err,salt) => {
                        bcrypt.hash(newPassword,salt,async (err,hash)=>{
                            if(err){
                                return res.status(400).send({message : "Failed to update password"});
                            }
                            else{
                                AdminUser.update({
                                    mail : AdminUser.mail,
                                    password : hash
                                }).then((reg) =>{
                                    if(reg){
                                        return res.status(200).semd({message : "Successful"});
                                    }
                                    else{
                                        return res.status(400).send({message : "Server Error"})
                                    }
                                }).catch((err) => {
                                    console.log(err.message);
                                    return res.status(500).send({message : "Server Error. Try again later"});
                                })
                            }
                        });
                        if(err){
                            return res.status(500).send({message : "Server Error"});
                        }
                    });
                }
            }
            else if(obj.linkCode.length === 10){
                const ScholarUser = await Scholar.findOne({
                    where : {
                        emailid : obj.emailid
                    }
                });
                if(!ScholarUser){
                    return res.status(400).send({message : "Invalid Email"});
                }
                else{
                    var newPassword = req.body.password;
                    bcrypt.genSalt(saltRounds,async (err,salt) =>{
                        if(err){
                            return res.status(500).send({message : "Server Error"})
                        }
                        bcrypt.hash(newPassword,salt, async (err,hash)=>{
                            if(err){
                                return res.status(500).send({message : "Server Error"})
                            }
                            else{
                                ScholarUser.update({
                                    emailid : ScholarUser.emailid,
                                    password : hash
                                }).then((reg)=>{
                                    // Once the promise is resolved
                                    if(reg){
                                        return res.status(200).semd({message : "Successful"});
                                    }else{
                                        return res.status(400).send({message : "Server Error. Try again Later"});
                                    }
                                })
                                .catch((err) =>{
                                    console.error(err);
                                    return res.status(500).send({message : "Server Error. Try again Later"});
                                })
                            }
                        });
                        if(err){
                            return res.status(500).send({message : "Server Error, Try Again Later"});
                        }
                    });
                }
            }
        }
    }
    catch (err){
        console.error(err);
        return res.status(500).send({message : "Server Error"});
    }
}

const checkAdmin = async (mail) =>{
    const data = await Admin.findOne({
        where : {
            emailid : mail
        }
    })
    return data === null ? false : true
}

const checkScholar = async (mail) => {
    const data = await Scholar.findOne({
        where : {
            emailid : mail
        }
    })
    return data === null ? false : true
}

module.exports = {forgotPassword, setPassword}

