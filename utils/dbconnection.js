const dbConfig = require("../config/db")
const {Sequelize} = require("sequelize")
const sequelize = new Sequelize(dbConfig.database,dbConfig.user,dbConfig.password,
    {
        host : dbConfig.host,
        dialect : dbConfig.dialect
    });

module.exports = sequelize;
