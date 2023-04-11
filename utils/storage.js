const multer = require('multer')

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        switch(file.fieldname){
        case "international_conferences":
            cb(null,"backend/localFiles/conferences/international_conferences")
            break
        case "national_conferences":
            cb(null,"backend/localFiles/conferences/national_conferences")
            break
        case "international_seminars":
            cb(null,"backend/localFiles/seminars/international_seminars")
            break
        case "national_seminars":
            cb(null,"backend/localFiles/seminars/national_seminars")
            break
        case "international_workshops":
            cb(null,"backend/localFiles/workshops/international_workshops")
            break
        case "national_workshops":
            cb(null,"backend/localFiles/workshops/national_workshops")
            break
        case "international_papers":
            cb(null,"backend/localFiles/journals/international_papers")
            break
        case "national_papers":
            cb(null,"backend/localFiles/journals/national_papers")
            break
        case "research_publications":
            cb(null,"backend/localFiles/research_publications")
            break
        case "placement":
            cb(null,"backend/localFiles/placement")
            break
        default :
            cb(new Error("Invalid Fieldname"))
    }},
    filename : function(req,file,cb){
        cb(null,`${file.fieldname}-${Date.now()}.pdf`)
    }
})

module.exports = storage