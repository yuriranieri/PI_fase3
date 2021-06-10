const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send("FUNCIONANDO");
    console.log("Funcioando");
});

module.exports = router;