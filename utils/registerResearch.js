const {ResearchDetails,researchScholarResearch} = require("../schemas")
const registerResearch = async (req) => {
    researchDetails = new researchScholarResearch(req);
    await ResearchDetails.create({
        registration_no : researchDetails.registration_no,
        researcher_name : researchDetails.researcher_name,
        research_topic : researchDetails.research_topic,
        research_abstract: researchDetails.research_abstract,
        research_supervisor_name : researchDetails.research_supervisor_name,
        research_supervisor_address : researchDetails.research_supervisor_address,
        research_supervisor_phone_no: researchDetails.research_supervisor_phone_no,
        research_supervisor_email:researchDetails.research_supervisor_email
    })
}
module.exports = {registerResearch};