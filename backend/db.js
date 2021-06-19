const Sequelize = require('sequelize')

require('dotenv').config();

const db = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD, {
    host: process.env.PGHOST,
    dialect: 'postgres',
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

module.exports = db;