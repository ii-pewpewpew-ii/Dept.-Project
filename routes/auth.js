const express = require("express");
const router = express.Router();
const auth = require("../handlers/auth");
router.post(
    "/scholar",
    (req,res,next) =>{
        res.locals.role = "Scholar";
        next()
    },
    auth.login
);

router.get(
    "/admin",
    (req,res,next) =>{
        res.locals.role = "Admin",
        next()
    },
    auth.login
);

module.exports = router