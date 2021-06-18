const jwt = require('jsonwebtoken')

require('dotenv').config();

const auth = (req, res, next) => {
    let token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({
            err: 'Accesso negado'
        });
    }

    token.split(' ').pop();
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                err: 'Accesso negado'
            });
        }

        console.log(decoded);
        next();
    })
}

module.exports = auth