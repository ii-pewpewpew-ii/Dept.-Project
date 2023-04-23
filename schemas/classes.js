class researchScholarResearch{
    constructor (req){
        this.register_no = req.body.register_no
        this.researcher_name = req.body.first_name + req.body.last_name
        this.research_topic = req.body.research_topic
        this.research_abstract = req.body.research_abstract
        this.research_supervisor_name = req.body.research_supervisor_name
        this.research_supervisor_address = req.body.research_supervisor_address
        this.research_supervisor_phone_no = req.body.research_supervisor_phone_no
        this.research_supervisor_email = req.body.research_supervisor_email
    }
}
class researchScholarPersonal{
    constructor(req){
        this.register_no = req.body.register_no
        this.first_name = req.body.first_name
        this.last_name = req.body.last_name
        this.guardian_name = req.body.guardian_name
        this.date_of_birth = req.body.date_of_birth
        this.date_of_joining = req.body.date_of_joining
        this.phone = req.body.phone
        this.address = req.body.address
        this.permanent_address = req.body.permanent_address
        this.email_id = req.body.email_id
        this.mode_of_education = req.body.mode_of_education
        this.education = req.body.education
    }
}

module.exports ={
    researchScholarPersonal,
    researchScholarResearch
}