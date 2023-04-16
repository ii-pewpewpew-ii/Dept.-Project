const dbConnection = require("./dbconnection")
const token = require("./token")
const sendMail = require("./mail")
const {parseConferences,parseJournals, parseWorkshops,parseSeminars} = require("./parsefiles")
module.exports = {
    dbConnection,
    token,
    sendMail,
    parseConferences,
    parseJournals,
    parseWorkshops,
    parseSeminars
}