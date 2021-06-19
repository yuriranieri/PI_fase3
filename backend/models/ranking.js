const { DataTypes } = require('sequelize');
const db = require("../db");
const User = require('./user');

const Ranking = db.define('partida', {
    pontuacao: DataTypes.INTEGER
});

Ranking.belongsTo(User, {
    foreignKey: {
        name: 'id_usuario'
    }
});

module.exports = Ranking;