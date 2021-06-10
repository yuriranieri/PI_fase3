const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;
const rota = require('./routes/test');

app.use(cors());
app.use(express.json());
app.use('/', rota);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});