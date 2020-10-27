const Sequelize = require('sequelize')
const {DB_NAME,USER_NAME,PASSWORD} = require('../DB_KEY')
const sequelize = new Sequelize(DB_NAME,USER_NAME,PASSWORD,{
    host:'localhost',
    dialect: 'mysql'
})
module.exports = sequelize