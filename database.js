const Sequlize = require('sequelize');

const sequelize = new Sequlize('JaideepGrover', 'jaideep', 'database@123456', {
    host: 'serverjai.database.windows.net',
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        encrypt: true
    }
})

module.exports = sequelize;