module.exports =  class researchScholarPersonal{
    constructor(req){
        this.registration_no = req.body.registration_no
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
