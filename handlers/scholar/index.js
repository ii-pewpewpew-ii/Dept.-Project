const {registerScholar} = require("./register");
const {retrieveUsingDates, retrieveUsingType,retrieveUsingScope,retrieveResearchData,retrievePersonalData} = require("./retrieveQueries")
module.exports = {
    registerScholar,
    retrieveUsingDates,
    retrieveUsingType,
    retrieveUsingScope,
    retrievePersonalData,
    retrieveResearchData
}