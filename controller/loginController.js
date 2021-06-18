const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/user');
const { check, body, validationResult } = require('express-validator');

require('dotenv').config();

router.post('/', [
    check('login', "Login é um campo obrigatório")
        .trim().escape().notEmpty(),
    check('password', "Senha é um campo obrigatório")
        .trim().escape().notEmpty()
], (req, res) => {
    const erros = validationResult(req);

    const contextoErros = {
        erros: erros.array(),
    };

    console.log(erros);

    if (!erros.isEmpty() || contextoErros.erros.length > 0) {
        return res.status(422).json(contextoErros);
    } else {
        User.findOne({
            where: { login: req.body.login }
        }).then(user => {
            if (user) {
                bcrypt.compare(req.body.password, user.password).then(result => {
                    if (result) {
                        const token = jwt.sign({
                            login: user.login
                        }, process.env.SECRET);

                        console.log("token: ", token)
                        return res.json({
                            token: token
                        });
                    } else {
                        console.log("Não encontrou usuário com a senha");
                        return res.status(400).json({
                            err: 'Usuário/senha incorretos'
                        })
                    }
                })
            } else {
                console.log("Não encontrou usuário com o login");
                return res.status(400).json({
                    err: 'Usuário/senha incorretos'
                })
            }
        }).catch(error => {
            console.log('ERROR:', error);
            return res.status(500).json({
                err: error
            });
        })
    }
});

router.get('/', (req, res) => {
    User.findAll().then(user => res.json(user))
});

module.exports = router;