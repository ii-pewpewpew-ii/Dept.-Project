const dbConnection = require("./dbconnection")
const token = require("./token")
const sendMail = require("./mail")
const {parseConferences,parseJournals, parseWorkshops,parseSeminars} = require("./parsefiles")
const {registerResearch} = require("./registerResearch");
const {fieldsConfiguration} = require("./fields"); 
const {upload} = require("./multerInstance");
const {handleDocumentRetrieveRequests,handleRetrieveScholar,retrieveUsingRegisterNumber}= require("./retrieveQueries");
module.exports = {
    handleDocumentRetrieveRequests,
    handleRetrieveScholar,
    parseConferences,
    parseJournals,
    parseWorkshops,
    parseSeminars,
    registerResearch,
    retrieveUsingRegisterNumber,
    dbConnection,
    token,
    sendMail,
    fieldsConfiguration,
    upload
}