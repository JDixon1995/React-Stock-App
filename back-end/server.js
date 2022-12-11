const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
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

app.get('/api/opec', async (req, res) => {
	const opec = await axios({
		method: "GET",
		url: `https://data.nasdaq.com/api/v3/datasets/OPEC/ORB.json`
	})
	const data = await opec.data
	res.json(data)
})