const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;
const loginRota = require('./controller/loginController');

app.use(cors());
app.use(express.json());
app.use('/login', loginRota);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});