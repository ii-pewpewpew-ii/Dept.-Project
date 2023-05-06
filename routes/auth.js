const express = require("express");
const router = express.Router();
const auth = require("../handlers/auth");
router.post(
    "/scholar",
    (req,res,next) =>{
        req.locals.role = "Scholar";
        next()
    },
    auth.login
);

router.post(
    "/admin",
    (req,res,next) =>{
        req.locals.role = "Admin",
        next()
    },
    auth.login
);

router.post(
    "/forgot-password",
    auth.forgotPassword
    );
router.post(
    "/set-password/:userId/:linkCode",
    (req,res,next) =>{
        req.data.userId = req.params.userId;
        req.data.linkCode = req.params.linkCode;
        next();
    },
    auth.setPassword
    );

router.post(
    "/create-scholar",
    auth.ScholarSignup
);

router.post(
    "/admin-signup",
    auth.AdminSignup
);



module.exports = router