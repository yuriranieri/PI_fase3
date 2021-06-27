const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;
const loginRouter = require('./controller/loginController');
const newUserRouter = require('./controller/createUserController');
const rankingRouter = require('./controller/rankingController');
const questionsRouter = require('./controller/questionController');
const auth = require('./auth')

app.use(cors());
app.use(express.json());
app.use('/login', loginRouter);
app.use('/register', newUserRouter);
app.use('/ranking', rankingRouter);
app.use(auth) // a partir daqui precisa do token de autenticacao
app.use('/question', questionsRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});