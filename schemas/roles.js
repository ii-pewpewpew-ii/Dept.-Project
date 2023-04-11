
const Sequelize = require('sequelize')

const utils = require("../utils")
const sequelize = utils.dbConnection
const Admin = sequelize.define("dist_admin_role", {
    emailid: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
        validate: { isEmail: true, notNull: true, notEmpty: true }
    },
    password: {
        allowNull: false,
        type: Sequelize.TEXT
    },
    userid: {
        primaryKey: true,
        type: Sequelize.NUMBER,
        allowNull: false,
        autoIncrement: true
    }
}, {
    freezeTableName: true
});

const Scholar = sequelize.define("dist_scholar_role", {
    emailid: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
        validate: { isEmail: true, notNull: true, notEmpty: true }
    },
    password: {
        allowNull: false,
        type: Sequelize.TEXT
    },
    userid: {
        primaryKey: true,
        type: Sequelize.NUMBER,
        allowNull: false,
        autoIncrement: true
    },
    verified : {
        type : Sequelize.BOOLEAN,
        allowNull : false,
        defaultValue : false
    }
}, {
    freezeTableName: true
});

module.exports = { Admin, Scholar};