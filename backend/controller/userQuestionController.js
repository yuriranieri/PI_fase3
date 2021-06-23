const router = require('express').Router();
const UserQuestion = require('../models/userQuestion');
const User = require('../models/user');
const Question = require('../models/question');
const Alternativa = require('../models/alternativa');

router.get('/:questionId', (req, res) => {
    Question.findOne({
        where: { id: req.params.questionId },
        attributes: ['enunciado', 'pontuacao'],
        include: [
            { model: Alternativa },
            {
                model: User,
                attributes: ['login'],
                // where: { id: req.params.userId },
                through: {
                    attributes: ['resposta_usuario']
                }
            }
        ]
    }).then(resposta => {
        if (resposta) {
            res.json(resposta);
        } else {
            console.log("UsuarioQuestão não encontrado");
            return res.status(400).json({
                err: 'UsuarioQuestão não encontrado'
            })
        }
    }).catch(error => {
        console.log('ERROR:', error);
        return res.status(500).json({
            err: error
        });
    })
})

module.exports = router;