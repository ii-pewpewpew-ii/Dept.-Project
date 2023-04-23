const {
    ResearchDetails,
    PersonalDetails,
    ConferencePaper,
    JournalPaper,
    Workshops,
    Seminars
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
    Workshops,
    Seminars,
    PersonalDetails,
    Admin,
    Scholar,
    ResearchDetails,
    ConferencePaper,
    JournalPaper,
    researchScholarPersonal,
    researchScholarResearch
}