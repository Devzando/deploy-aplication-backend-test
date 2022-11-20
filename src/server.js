require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({msg: process.env.teste})
})

const port = process.env.PORT || 3333

app.listen(port)