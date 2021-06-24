const router = require('express').Router();
const Question = require('../models/question');
const Alternativa = require('../models/alternativa')

router.get('/:id', (req, res) => {
    Question.findOne({
        where: { id: req.params.id },
        attributes: ['enunciado', 'pontuacao'],
        include: {
            model: Alternativa,
            // attributes: ['id', 'valor_alternativa']
        }
    }).then(question => {
        if (question) {
            for (let i = 0; i < question.alternativas.length; i++) {
                if (question.alternativas[i].correta === true) {
                    console.log('alternativas ', question.alternativas[i].id, '\n correta: ', question.alternativas[i].correta);
                }
            }
            return res.json(question)
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