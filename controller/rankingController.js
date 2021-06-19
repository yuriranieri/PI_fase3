const router = require('express').Router();
const Ranking = require('../models/ranking');
const User = require('../models/user');

router.get('/', (req, res) => {
    Ranking.findAll({
        order: [
            ['pontuacao', 'DESC']
        ],
        attributes: ['pontuacao'],
        include: {
            model: User,
            attributes: ['login']
        }
    })
        .then(ranking => res.json(ranking))
        .catch(error => {
            console.log('ERROR:', error);
            return res.status(500).json(error);
        })
});

module.exports = router;