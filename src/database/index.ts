const Sequelize = require('sequelize');
const dbConfig = require('../config/database.ts')

const connection = new Sequelize(dbConfig)

export default connection;