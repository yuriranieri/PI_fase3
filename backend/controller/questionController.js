const router = require('express').Router();
const Question = require('../models/question');
const Alternativa = require('../models/alternativa')

router.get('/:id', (req, res) => {
    Question.findOne({
        where: { id: req.params.id },
        attributes: ['enunciado', 'pontuacao'],
        include: {
            model: Alternativa,
            attributes: ['valor_alternativa', 'correta']
        }
    })
        .then(question => {
            if (question) {
                console.log('questao: ', question);
                res.json(question)
            } else {
                console.log("questão não encontrada");
                return res.status(400).json({
                    err: 'Questão não encontrada'
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