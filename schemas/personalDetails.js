const Sequelize = require("sequelize")
const sequelize = require("../utils/dbconnection")

const PersonalDetails = sequelize.define("DIST_Research_Scholar_Personal",{
    registration_no : {
        primaryKey : true,
        allowNull : false,
        unique : true,
        type : Sequelize.TEXT
    },
    first_name : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    last_name : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    guardian_name : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    date_of_birth : {
        type : Sequelize.DATE,
        allowNull : false
    },
    date_of_joining : {
        type : Sequelize.DATE,
        allowNull : false
    },
    phone : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    address : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    permanent_address : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    email_id : {
        type : Sequelize.TEXT,
        allowNull : false,
        unique : true,
        validator : {isEmail :true,notNull : true, notEmpty : true}
    },
    mode_of_education : {
        type : Sequelize.TEXT,
        allowNull : false,
    },
    education : {
        type : Sequelize.TEXT,
        allowNull : false
    }
})

module.exports = PersonalDetails