const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 8000

const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
	res.send('Hello NASDAQ App!')
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})