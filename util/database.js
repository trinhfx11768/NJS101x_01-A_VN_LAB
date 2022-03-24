const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Agg@2909', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
