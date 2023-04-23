const express = require("express")
const router = express.Router();
const scholar = require("../handlers/scholar");
const {upload,fieldsConfiguration} = require("../utils");

router.post(
    "/register-details",
    upload.fields(fieldsConfiguration),
    scholar.registerScholar    
    );

router.get(
    "/get-details/dates",
    scholar.retrieveUsingDates
)

router.get(
    "/get-details/type",
    scholar.retrieveUsingType
)

router.post("/download",
   
    (req,res) => {
        const filePath = req.body.filepath;
        
        res.download(filePath,(err) =>{
            if (err) {
                console.error(err);
                return res.status(500).send("Server Error downloading. Try again Later");
            }
        });

    }

)
module.exports = router;


