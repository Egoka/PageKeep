const {Sequelize} = require('sequelize')
const {DB_NAME,USER_NAME,PASSWORD, CONFIGURATION} = require('../keys/keyFork')
const sequelize = new Sequelize(DB_NAME,USER_NAME,PASSWORD, {
    host: CONFIGURATION.host,
    port: CONFIGURATION.port,
    dialect: 'mysql'
})
module.exports = sequelize