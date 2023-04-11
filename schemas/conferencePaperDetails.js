const Sequelize = require("sequelize")
const sequelize = require("../config/dbconnection")

const ConferencePaper = sequelize.define("DIST_Conference_Papers",{
    paperid : {
        type : Sequelize.TEXT,
        allowNull : false,
        unique : true,
        primaryKey : true,
        autoIncrement : true
    },
    register_no : {
        type : Sequelize.TEXT,
        allowNull:false
    },
    author_name : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    paper_name : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    isbn_number : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    conference_name : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    volume_number : {
        type : Sequelize.NUMBER,
        allowNull : false
    },
    page_number:{
        type : Sequelize.NUMBER,
        allowNull : false
    },
    period_from : {
        type : Sequelize.DATE,
        allowNull : false
    },
    period_to : {
        type : Sequelize.DATE,
        allowNull : false
    },
    nationality : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    document_path : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    place : {
        type : Sequelize.TEXT,
        allowNull : false
    },  
    
});
module.exports = ConferencePaper;