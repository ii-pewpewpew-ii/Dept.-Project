const express = require("express")
const router = express.Router();
const scholar = require("../handlers/scholar");
const {upload,fieldsConfiguration} = require("../utils");
const {fetchDashboard} = require("../handlers/scholar");

router.post(
    "/register-details",
    upload.fields(fieldsConfiguration),
    scholar.registerScholar    
    );

router.get("/journal-papers",
    (req,res)=>{
        req.body.document_category = "journals";
    },
    scholar.retrieveUsingType
);

router.get("/conference-papers",

    (req,res) => {
        req.body.document_category = "conferencepapers";
    },
    scholar.retrieveUsingType

);

router.get("/seminars",

    (req,res)=>{
        req.body.document_category = "seminars";
    },
    scholar.retrieveUsingType

);

router.get("/workshops",
    (req,res) =>{
        req.body.document_category = "workshops"
    },
    scholar.retrieveUsingType
);

router.get("/dashboard",
    scholar.fetchDashboard
);

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
);
module.exports = router;


