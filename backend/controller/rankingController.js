const router = require('express').Router();
const Ranking = require('../models/ranking');
const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
        const ranking = await Ranking.findAll({
            order: [
                ['pontuacao', 'DESC']
            ],
            attributes: ['pontuacao'],
            include: {
                model: User,
                attributes: ['login']
            }
        });
        return res.json(ranking)
    } catch (error) {
        console.log('ERROR:', error);
        return res.status(500).json(error);
    }
});

module.exports = router;