const dbConnection = require("./dbconnection")
const token = require("./token")
const sendMail = require("./mail")
const {parseConferences,parseJournals, parseWorkshops,parseSeminars} = require("./parsefiles")
const {registerResearch} = require("./registerResearch");
const {fieldsConfiguration} = require("./fields"); 
const {upload} = require("./multerInstance");
module.exports = {
    dbConnection,
    token,
    sendMail,
    parseConferences,
    parseJournals,
    parseWorkshops,
    parseSeminars,
    registerResearch,
    fieldsConfiguration,
    upload
}