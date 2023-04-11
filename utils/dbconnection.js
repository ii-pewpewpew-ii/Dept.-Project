const dbConfig = require("../config/db")
const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.database,dbConfig.user,dbConfig.password,
    {
        host : dbConfig.host,
        dialect : dbConfig.dialect
    });

module.exports = sequelize;
// (async () => {
// try {
//     await sequelize.authenticate()
//     console.log("Connection has been established")
// }catch(error){
//     console.error("unable to connect",error)
// }})()


// sequelize.sync()
// Departments.create({
//     dept_id : 1
// });