const utils = require("../../utils")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const { Admin, Scholar } = require("../../schemas/roles")
const { JWTDetails } = require("../../config/config")

const sequelize = utils.dbConnection
//routes : dist_research_scholar/auth/

const loginHandler = async (req, res) => {
    await sequelize.sync()

    const role = res.locals.role
    const mailId = req.body.emailid
    const password = req.body.password
    var Role;
    if (role === "Admin") {
        Role = Admin
    } else {
        Role = Scholar
    }
    try {
        if (mail && password) {
            let data = await Role.findOne({
                where: {
                    emailid: mailId
                }
            })
            if (data === null) {

                return res.status(401).send({ message: "Mail ID is not registered yet" })

            }

            bcrypt.compare(password, data.password, function (err, result) {
                if (err) {
                    return res.status(401).send({ message: "Server Error" })
                }
                else {
                    if (result === true) {
                        const id = data.dataValues.userid

                        var token = jwt.sign({ id ,role}, JWTDetails.secret, {
                            expiresIn: JWTDetails.jwtExpiration
                        });
                        return res.status(200).json({ message: "Login Success", accessToken: token })
                    }
                    else {
                        return res.status(401).send({ message: "Wrong Password" })
                    }
                }
            });
        }
        else {
            return res.status(400).send({ message: "Invalid Data" })
        }
    }
    catch (err) {
        return res.status(500).send({ message: "server error" });
    }
}
module.exports =  loginHandler 