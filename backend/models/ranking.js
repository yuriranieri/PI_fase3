const { DataTypes } = require('sequelize');
const db = require("../db");
const User = require('./user');

const Ranking = db.define('partida', {
    pontuacao: DataTypes.INTEGER
});

Ranking.hasMany(User, {
    foreignKey: {
        name: 'id_ranking'
    }
});

module.exports = Ranking;