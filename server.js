'use strict';

const express = require('express')
const { json } = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.set('port', port)

app.use(express.static('static'))
app.use(json())

app.listen(port, () => {
		console.log(`Listening on port ${port}`)
})