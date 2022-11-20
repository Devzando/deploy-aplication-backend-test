require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json(process.env.teste)
})

app.listen(3333)