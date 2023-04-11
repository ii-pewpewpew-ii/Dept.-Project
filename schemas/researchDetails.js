const Sequelize = require("sequelize")
const sequelize = require("../utils/dbconnection")

const ResearchDetails = sequelize.define("DIST_Research_Scholar_Research",{
    registration_no : {
        allowNull : false,
        type : Sequelize.TEXT,
        primaryKey : true,
        unique : true
    },
    researcher_name : {
        allowNull : false,
        type : Sequelize.TEXT
    },
    research_topic : {
        allowNull : false,
        type : Sequelize.TEXT
    },
    research_abstract : {
        allowNull : false,
        type : Sequelize.TEXT
    },
    research_supervisor_name : {
        allowNull : false,
        type: Sequelize.TEXT
    },
    research_supervisor_address : {
        allowNull : false,
        type : Sequelize.TEXT
    },
    research_supervisor_phone_no :{
        allowNull : false,
        type : Sequelize.TEXT
    },
    research_supervisor_email : {
        allowNull : false,
        type : Sequelize.TEXT
    }
})
module.exports = ResearchDetails