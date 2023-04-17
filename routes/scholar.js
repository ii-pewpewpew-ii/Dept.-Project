const express = require("express")
const router = express.Router();
const scholar = require("../handlers/scholar");
const {upload,fieldsConfiguration} = require("../utils");

router.post(
    "/register-details",
    upload.fields(fieldsConfiguration),
    scholar.registerScholar    
    );
module.exports = router;


