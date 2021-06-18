const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;
const loginRota = require('./controller/loginController');
const newUserRota = require('./controller/createUserController');
const test = require('./controller/test');
const auth = require('./auth')

app.use(cors());
app.use(express.json());
app.use('/login', loginRota);
app.use('/register', newUserRota);
app.use('/test', auth, test);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});