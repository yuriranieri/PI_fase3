const router = require('express').Router();
const Question = require('../models/question');
const Alternativa = require('../models/alternativa');
const UserQuestion = require('../models/userQuestion');
const { check, body, validationResult } = require('express-validator');

router.get('/:id', async (req, res) => {
    try {
        const questions = await Question.findAll({
            where: { id: req.params.id },
            attributes: ['enunciado'],
            include: {
                model: Alternativa,
                attributes: ['id', 'valor_alternativa']
            }
        });

        if (!questions) {
            console.log("questão não encontrada");
            return res.status(400).json({
                err: 'Questão não encontrada'
            })
        }

        return res.json(questions)
    } catch (error) {
        console.log('ERROR:', error);
        return res.status(500).json({
            err: error
        });
    }
});

router.post('/:questionId/user/:userId', [
    check('resposta_usuario', "É preciso escolher uma alternativa e responder a pergunta")
        .trim().escape().notEmpty()
], async (req, res) => {
    try {
        const erros = validationResult(req);

        const contextoErros = {
            erros: erros.array(),
        };

        console.log(erros);

        if (!erros.isEmpty() || contextoErros.erros.length > 0) {
            return res.status(422).json(contextoErros);
        } else {
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

            console.log('resposta user: ', req.body.resposta_usuario)

            const alternativaUser = question.alternativas.find(alternativa => {
                console.log('dentro alternativa id; ', alternativa.id, '\n resp user: ', req.body.resposta_usuario)
                return alternativa.id == req.body.resposta_usuario;
            });
            
            if (!alternativaUser) {
                console.log('alternativa escolhida pelo usuario não pertence a pergunta', question.id)
                return res.status(400).json({
                    err: 'alternativa escolhida pelo usuario não pertence a pergunta'
                })
            }

            console.log('id alternativa: ', alternativaUser.id, '\nvalor: ', alternativaUser.valor_alternativa, '\ncorreta: ', alternativaUser.correta)

            const answer = await UserQuestion.create({
                id_usuario: req.params.userId,
                id_questao: req.params.questionId,
                resposta_usuario: alternativaUser.id
            });

            res.json({
                msg: 'Resposta salva com sucesso!',
                id_alternativa_user: answer.resposta_usuario
            })
        }
    } catch (error) {
        console.log('ERROR:', error);
        return res.status(500).json({
            err: error
        })
    }
});

module.exports = router;