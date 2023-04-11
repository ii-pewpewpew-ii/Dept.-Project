
//const registerScholar = require("./handlers/registerScholarhandler")
const bodyParser = require('body-parser');
//const path = require("path")
//const fields = require("./schemas/fields")
//const upload = require("./handlers/multerInstance")
const express = require("express")
const app = express()
const cors = require("cors")
const utils = require("./utils")

const authroutes = require("./routes/auth");

const router = express.Router()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended : false}))

utils.dbConnection.sync().then(() =>{
    console.log("Synced Db.")
}).catch((err)=>{
    console.log("Failed to sync db : " + err.message)
});

app.use('/api/auth',authroutes);

app.use('/api/admin',(req,res,next) =>{
    if(res.locals.role == "Admin") next()
    return res.status(401).send({status : "failure",message : "Admin-only Routes"})
},(req,res)=>{
    return res.status(200).send({message : "Admin routes to be implemented"})
});


app.use('/api/scholar',(req,res,next) =>{
    if(res.locals.role == "Scholar") next()
    return res.status(401).send({status : "failure",message : "Admin-only Routes"})
},(req,res)=>{
    return res.status(200).send({message : "Scholar routes to be implemented"})
});

app.listen(8000, ()=> console.log("server running on http://localhost:8000/"))



    