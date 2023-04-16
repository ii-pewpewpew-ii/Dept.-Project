const login = require("./loginHandler")
const {AdminSignup,ScholarSignup} = require("./signup");
const {forgotPassword, setPassword} = require("./password")

module.exports = {
    login,
    AdminSignup,
    ScholarSignup,
    forgotPassword,
    setPassword
}