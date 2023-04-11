const researchScholarPersonal = require("../schemas/researchScholarPersonal")
const researchScholarResearch = require("../schemas/researchScholarResearch")
const fields = require("../schemas/fields")
const sequelize = require("./dbconnection")
const PersonalDetails = require("../schemas/personalDetails")
const ResearchDetails = require("../schemas/researchDetails")
const upload = require("./multerInstance")
const registerScholar = async (req,res,next)=>{

    try {
        await sequelize.sync()
        const researchscholarpersonal = new researchScholarPersonal(req)
        const researchscholarresearch = new researchScholarResearch(req)
        await PersonalDetails.create({
            registration_no : researchscholarpersonal.registration_no,
            first_name : researchscholarpersonal.first_name,
            last_name : researchscholarpersonal.last_name,
            guardian_name : researchscholarpersonal.guardian_name,
            date_of_birth : researchscholarpersonal.date_of_birth,
            date_of_joining : researchscholarpersonal.date_of_joining,
            phone : researchscholarpersonal.phone,
            address : researchscholarpersonal.address,
            permanent_address : researchscholarpersonal.permanent_address,
            email_id : researchscholarpersonal.email_id,
            mode_of_education : "full Time",
            education : researchscholarpersonal.education,
            }
        )
        await ResearchDetails.create({
            registration_no : researchscholarresearch.registration_no,
            researcher_name : researchscholarresearch.researcher_name,
            research_topic : researchscholarresearch.research_topic,
            research_abstract : researchscholarresearch.research_abstract,
            research_supervisor_name : researchscholarresearch.research_supervisor_name,
            research_supervisor_address : researchscholarresearch.research_supervisor_address,
            research_supervisor_phone_no : researchscholarresearch.research_supervisor_phone_no,
            research_supervisor_email : researchscholarresearch.research_supervisor_email,
        })
//         uploadfilepaths(req,res,fields)
        
    } catch (error) {
        console.log(error.message)
    }
}
// const uploadfilepaths = async (req,res)=>{
//     fields.forEach((field) =>{
//         if(field.name in req.files){    
//             req.files[field.name].forEach(
//                 async (file)=>{
//                     insertdocument(field.name,file,req)
//                 }
//             )
//         }
//     });
// }
// const  insertdocument = async (field,file,req)=>{
//     try{
//         if(field !== "research_publications" && field !== "placement"){
//             field = field.split("_")[1]
//         }
//         await pool.query(
//         `INSERT INTO dist_research_scholar_${field} (registration_no,document_name,document_path)
//          VALUES ('${req.body.registration_no}','${file.originalname}','${file.path}')`
//     )
//     }
//     catch(err){
//         console.log(err.message)
//     }
// }


module.exports = registerScholar
