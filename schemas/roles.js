
const Sequelize = require('sequelize')
const sequelize = require("../utils/dbconnection")
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
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
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


const Verification=sequelize.define("verification",{
    verifyId:{
      allowNull:false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    linkCode:{
      allowNull:false,
      type:Sequelize.TEXT,
      validate:{notNull:true,notEmpty: true }//wont allow null
    },
    emailid:{
      type:Sequelize.TEXT,
      allowNull:false,
      unique:true,
      validate:{isEmail:true,notNull:true,notEmpty: true}
    },
    expireTime:{
      allowNull:false,
      type:Sequelize.TEXT,
      validate:{notNull:true,notEmpty: true }
    }
  },
    {
    freezeTableName: true
    })

module.exports = { Admin, Scholar, Verification};