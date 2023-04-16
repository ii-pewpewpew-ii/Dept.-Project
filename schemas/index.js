const {
    ResearchDetails,
    PersonalDetails,
    ConferencePaper,
    JournalPaper
} = require("./research");

const {
    researchScholarPersonal,
    researchScholarResearch
} = require('./classes')

const {
    Admin,
    Scholar
} = require("./roles");

module.exports = {
    PersonalDetails,
    Admin,
    Scholar,
    ResearchDetails,
    ConferencePaper,
    JournalPaper,
    researchScholarPersonal,
    researchScholarResearch
}