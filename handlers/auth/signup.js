const { Admin, Scholar,PersonalDetails } = require("../../schemas")
const bcrypt = require("bcrypt");
const saltRounds = 10
//const {tranporter} = require("../../config"); Create index.js file in config/
const researchScholarPersonal = require("../../schemas/researchScholarPersonal");
const { transporter } = require("../../config/config.js");

/*
 PATHS : /api/auth/signup-admin && /api/auth/create-scholar
 POST : {mail,password} && {mail}
 RESPONSE : {Status,message}
*/

const AdminSignup = async (req, res) => {
    const mail = req.body.mail;
    const password = req.body.password;
    console.log(req.body)
    if (mail && password) {
        try {
            const data = await Admin.findOne({
                where: {
                    emailid: mail
                }
            })

            if (data) {
                return res.status(403).send({ message: "Email already Exists" });
            }

            bcrypt.genSalt(saltRounds, async (err, salt) => {
                if (err) {
                    return res.status(500).send({ message: "Server Error" });
                }

                bcrypt.hash(
                    password,
                    salt,
                    async (err, hash) => {
                        if (err) {
                            return res.status(500).send({ message: "Server Error" });
                        }

                        else {
                            const data = await Admin.create({
                                emailid: mail,
                                password: hash
                            })
                            return res.status(200).send({ message: "Success" });
                        }
                    }
                );
            });
        }
        catch (error) {
            console.log(error)
            return res.status(500).send({ message: "Failure due to" + error.message })
        }
    }
    else {
        return res.status(500).send({ message: "Invalid Data" });
    }
}

const ScholarSignup = async (req, res) => {
    let scholarDetails = new researchScholarPersonal(req);
    if (scholarDetails.email_id) {
        data = await Scholar.findOne({
            where: {
                emailid: scholarDetails.email_id
            }
        })
        if (data) {
            return res.status(500).send({ message: "Email already Exists" });
        }
        console.log()
        const roll_no = scholarDetails.registration_no;
        const password = roll_no + "first";
        bcrypt.genSalt(saltRounds, (err,salt) => {

            bcrypt.hash(
                password,
                salt,
                async (err, hash) => {
                    if (err) {
                        console.error(error);
                        return res.status(500).send({ message: "Failed to create a new User" });
                    }
                    else {
                        let transportData = {
                            from : process.env.SOURCE_EMAIL,
                            to : scholarDetails.email_id,
                            subject : "Login Credentials",
                            text : `Use these credentials to login to dist portal\nusername : ${scholarDetails.email_id}\npassword : ${password}`
                        };
                        transporter.sendMail(transportData,(error,info)=>{
                            if(error){
                                console.error(error);
                                return res.status(500).send({message : "Mail couldn't be send"});
                                
                            }else{
                                console.log("Email Sent ");
                            }
                        })
                        const data = Scholar.create({
                            emailid: scholarDetails.email_id,
                            password: hash
                        })
                        const personalDetails = PersonalDetails.create({
                            registration_no : scholarDetails.registration_no,
                            first_name : scholarDetails.first_name,
                            last_name : scholarDetails.last_name,
                            guardian_name : scholarDetails.guardian_name,
                            date_of_birth : scholarDetails.date_of_birth,
                            date_of_joining : scholarDetails.date_of_joining,
                            phone : scholarDetails.phone,
                            address : scholarDetails.address,
                            permanent_address : scholarDetails.permanent_address,
                            email_id : scholarDetails.email_id,
                            mode_of_education : scholarDetails.mode_of_education,
                            education : scholarDetails.education,
                        })
                        
                        
                        return res.status(200).send({ message: "Success" })
                    }
                }
            )
        })

        /*
            -> generate new password
            -> fill details in Scholar role
            -> fill details in research scholar personal
            -> send mail using node mailer to the mail id with login credentials
        */
    } else {
        return res.status(500).send({ message: "Failure" });
    }
}


module.exports = { AdminSignup, ScholarSignup }