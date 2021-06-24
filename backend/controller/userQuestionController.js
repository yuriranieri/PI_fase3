const router = require('express').Router();
const UserQuestion = require('../models/userQuestion');
const User = require('../models/user');
const Question = require('../models/question');
const Alternativa = require('../models/alternativa');

router.post('/:questionId/user/:userId', async (req, res) => {
    try {
        const question = await Question.findOne({
            where: { id: req.params.questionId },
            include: { model: Alternativa }
        });

        if (!question) {
            console.log("Questão não encontrada");
            return res.status(400).json({
                err: 'Questão não encontrada'
            });
        }
        
        if (question.alternativas[0].id != req.body.resposta_usuario
            && question.alternativas[1].id != req.body.resposta_usuario
            && question.alternativas[2].id != req.body.resposta_usuario
            && question.alternativas[3].id != req.body.resposta_usuario) {
            console.log('resposta usuario não pertence a pergunta', question.id)
            return res.status(400).json({
                err: 'resposta usuario não pertence a essa pergunta'
            })
        }

        const answer = await UserQuestion.create({
            id_usuario: req.params.userId,
            id_questao: req.params.questionId,
            resposta_usuario: req.body.resposta_usuario
        })

        res.json({
            msg: 'Resposta salva com sucesso criado com sucesso!',
            id_alternativa_user: answer.resposta_usuario
        })
    } catch (error) {
        console.log('ERROR:', error);
        return res.status(500).json({
            err: error
        })
    }
})

router.get('/:questionId', (req, res) => {
    Question.findOne({
        where: { id: req.params.questionId },
        attributes: ['enunciado', 'pontuacao'],
        include: [
            {
                model: Alternativa,
                attributes: ['id', 'valor_alternativa', 'correta']
            },
            {
                model: User,
                attributes: ['login'],
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