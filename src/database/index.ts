import { Sequelize } from "sequelize/types";
const Sequelizes = require('sequelize');
const dbConfig = require('../config/database.ts')
var connection: Sequelize;

if (process.env.DATABASE_URL != null) {
  connection = new Sequelizes(`${process.env.DATABASE_URL}?sslmode=require`, {
      url: process.env.DATABASE_URL,
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
          ssl: true,
      },
      database: 'criticism_app_production',
      define: {
        timestamps: true,
        underscored: true
      }
  });
} else {
  connection = new Sequelizes(dbConfig)
}

export default connection;