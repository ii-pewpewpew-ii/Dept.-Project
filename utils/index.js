const dbConnection = require("./dbconnection")
const token = require("./token")
const sendMail = require("./mail")
const {parseConferences,parseJournals} = require("./parsefiles")
module.exports = {
    dbConnection,
    token,
    sendMail,
    parseConferences,
    parseJournals
}