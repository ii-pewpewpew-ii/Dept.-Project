const multer = require('multer')

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        switch(file.fieldname){
        case "journals":
            cb(null,"api/filestorage/journals")
            break
        case "conferences":
            cb(null,"api/filestorage/conferences")
            break
        case "seminars":
            cb(null,"api/filestorage/seminars")
            break
        case "researchpublications":
            cb(null,"api/filestorage/seminars")
            break

        // case "placement":
        //     cb(null,"backend/localFiles/placement")
        //     break
        default :
            cb(new Error("Invalid Fieldname"))
    }},
    filename : function(req,file,cb){
        cb(null,`${file.fieldname}-${Date.now()}.pdf`)
    }
})

module.exports = storage