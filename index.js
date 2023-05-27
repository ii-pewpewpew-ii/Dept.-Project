
const bodyParser = require('body-parser');
const express = require("express")
const app = express()
const cors = require("cors")
const utils = require("./utils")
const authroutes = require("./routes/auth");
const scholarroutes = require("./routes/scholar");
const { verify } = require('jsonwebtoken');
const { verifyToken } = require('./utils/token');
const router = express.Router()
const adminroutes = require("./routes/admin");
const unauthroutes = ["/api/auth/admin", "/api/auth/scholar", "/api/auth/admin-signup"]


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

utils.dbConnection.sync().then(() => {
    console.log("Synced Db.")
}).catch((err) => {
    console.log("Failed to sync db : " + err.message)
});

app.use('/api/auth',(req,res,next)=>{
    //req.locals = {},
    next();
}, authroutes,(req,res)=>{
    //eq.locals = {}
    return res.send(req.res);
})


app.use((req, res, next) => {


    //req.locals = {}
    const token = req.headers.authorization;
    if(!token || token === "Bearer no_token"){
        return res.status(400).send({message : "token required"});
    }

    const data = verifyToken(token);

    if(data){

        res.locals.role = data.role;
        res.locals.id = data.id;
        next();
    }

    else return res.status(401).send({message : "un-authorized, token required"});
    
})




app.use('/api/admin',  adminroutes);    

// (req, res, next) => {
//     if (res.locals.role != "Admin"){next()}
//     return res.status(401).send({ status: "failure", message: "Admin-only Routes" })
// }
app.use("/api/scholar", scholarroutes);

app.listen(8000, () => console.log("server running on http://localhost:8000/"))
