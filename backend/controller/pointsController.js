const router = require('express').Router();
const Alternativa = require('../models/alternativa');
const Question = require('../models/question');
const User = require('../models/user');
const UserQuestion = require('../models/userQuestion');

router.get('/:userId', async (req, res) => {
    try {
        const userAnswers = await UserQuestion.findAll({
            where: { id_usuario: req.params.userId },
            include:
            {
                model: Question,
                attributes: ['enunciado', 'pontuacao'],
                include: {
                    model: Alternativa,
                    attributes: ['id', 'valor_alternativa', 'correta']
                }
            }
        });

        console.log(userAnswers.length)
        if (userAnswers.length == 0) {
            console.log("questão não encontrada");
            return res.status(400).json({
                err: 'não encontrada'
            })
        }

        let userPontuacao = 0;
        let alternativaCorreta = 0;
        let acertos = 0;
        let erros = 0;
        userAnswers.forEach(answer => {
            alternativaCorreta = answer.questao.alternativas.find(alternativa => alternativa.correta == true).id;

            console.log('questao: ', answer.questao.enunciado, 'pontuacao: ', answer.questao.pontuacao);
            console.log('resposta usuario: ', answer.resposta_usuario);
            console.log('alternativa correta: ', alternativaCorreta)

            if (alternativaCorreta === answer.resposta_usuario) {
                console.log('user acertou a questão');
                userPontuacao += answer.questao.pontuacao;
                acertos++;
            } else {
                erros++
                console.log('user errou a questão');
            }

            console.log('userPontuacao: ', userPontuacao)
        });
        console.log('user acertou ', acertos, ' e errou ', erros, ' questões, totalizando com ', userPontuacao, 'pontos')

        // inserir a pontuação na tabela de ranking
        return res.json(userAnswers)
    } catch (error) {
        console.log('ERROR:', error);
        return res.status(500).json({
            err: error
        });
    }
});

module.exports = router;