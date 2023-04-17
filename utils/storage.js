const multer = require('multer')

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        switch(file.fieldname){
        case "journals":
            cb(null,"filestorage/journals")
            break
        case "conferences":
            cb(null,"filestorage/conferences")
            break
        case "seminars":
            cb(null,"filestorage/seminars")
            break
        case "workshops":
            cb(null,"filestorage/workshops")
            break

        // case "placement":
        //     cb(null,"backend/localFiles/placement")
        //     break
        default :
            cb(new Error("Invalid Fieldname"))
    }},
    filename : function(req,file,cb){
        cb(null,`${req.body.register_no}-${file.fieldname}-${Date.now()}.pdf`)
    }
})

module.exports ={ storage}