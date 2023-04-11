module.exports = class researchScholarResearch{
    constructor (req){
        this.registration_no = req.body.registration_no
        this.researcher_name = req.body.first_name + req.body.last_name
        this.research_topic = req.body.research_topic
        this.research_abstract = req.body.research_abstract
        this.research_supervisor_name = req.body.research_supervisor_name
        this.research_supervisor_address = req.body.research_supervisor_address
        this.research_supervisor_phone_no = req.body.research_supervisor_phone_no
        this.research_supervisor_email = req.body.research_supervisor_email
    }
}