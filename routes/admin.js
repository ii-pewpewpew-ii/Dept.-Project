const express = require("express");
const router = express.Router();
const auth = require("../handlers/auth");
const admin = require("../handlers/admin")
const { handleDocumentRetrieveRequests, handleRetrieveScholar, retrieveUsingRegisterNumber } = require("../utils")


router.post(
    "/create-scholar",
    auth.ScholarSignup
);

router.post(
    "/get-details",
    handleDocumentRetrieveRequests
);

router.post(
    "/retrieve-scholars",
    handleRetrieveScholar
);

router.post(
    "/scholar-details",
    retrieveUsingRegisterNumber
);

// router.get(
//     "/get-details/type",
//     scholar.retrieveUsingType
// )

router.get("/guide",
    admin.fetchGuideData
)

module.exports = router;