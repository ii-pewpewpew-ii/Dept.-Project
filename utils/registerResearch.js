const {ResearchDetails,researchScholarResearch} = require("../schemas")
const registerResearch = async (req) => {
    try{
    researchDetails = new researchScholarResearch(req);
    await ResearchDetails.create({
        register_no : researchDetails.register_no,
        researcher_name : researchDetails.researcher_name,
        research_topic : researchDetails.research_topic,
        research_abstract: researchDetails.research_abstract,
        research_supervisor_name : researchDetails.research_supervisor_name,
        research_supervisor_address : researchDetails.research_supervisor_address,
        research_supervisor_phone_no: researchDetails.research_supervisor_phone_no,
        research_supervisor_email:researchDetails.research_supervisor_email,
        supervisor_id : researchDetails.supervisor_id
    })}
    catch(err){
        console.error(err);
    }
}
module.exports = {registerResearch};