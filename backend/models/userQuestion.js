const { DataTypes } = require('sequelize');
const db = require("../db");
const User = require('./user');
const Question = require('./question');
const Alternativa = require('./alternativa');

const UserQuestion = db.define('usuario_questao', {
    id_usuario: {
        type: DataTypes.INTEGER,
        // primaryKey: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    id_questao: {
        type: DataTypes.INTEGER,
        // primaryKey: true,
        references: {
            model: Question,
            key: 'id'
        }
    },
    resposta_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        references: {
            model: Alternativa,
            key: 'id'
        }
    }
});

User.belongsToMany(Question, {
    through: UserQuestion,
    foreignKey: 'id_usuario'
    // otherKey: 'id_questao'
});
Question.belongsToMany(User, {
    through: UserQuestion,
    foreignKey: 'id_questao'
    // otherKey: 'id_usuario'
});

Alternativa.hasOne(UserQuestion, {
    foreignKey: 'resposta_usuario'
});

User.hasMany(UserQuestion, { foreignKey: 'id_usuario' });
UserQuestion.belongsTo(User, { foreignKey: 'id_usuario' });

Question.hasMany(UserQuestion, { foreignKey: 'id_questao' });
UserQuestion.belongsTo(Question, { foreignKey: 'id_questao' });

module.exports = UserQuestion;