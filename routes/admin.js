const express = require("express");
const router = express.Router();
const auth = require("../handlers/auth");
const admin = require("../handlers/admin")

router.post(
    "/create-scholar",
    auth.ScholarSignup
);

// router.get(
//     "/get-details/dates",
//     scholar.retrieveUsingDates
// )

// router.get(
//     "/get-details/type",
//     scholar.retrieveUsingType
// )

router.get("/guide",
    admin.fetchGuideData
)

module.exports = router;