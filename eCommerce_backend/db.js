const Sequelize = require('sequelize')
const config = require('./Config/config')

const sequelize = new Sequelize(config.developemnt);

module.exports = sequelize;