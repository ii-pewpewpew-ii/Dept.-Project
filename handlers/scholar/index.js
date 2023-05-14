const {registerScholar} = require("./register");
const {retrieveUsingDates, retrieveUsingType,retrieveUsingScope,retrieveResearchData,retrievePersonalData} = require("./retrieveQueries")
const {fetchDashboard} = require("./fetchDashboard");
module.exports = {
    registerScholar,
    retrieveUsingDates,
    retrieveUsingType,
    retrieveUsingScope,
    retrievePersonalData,
    retrieveResearchData,
    fetchDashboard
}