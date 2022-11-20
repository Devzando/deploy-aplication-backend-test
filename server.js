const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.status(200).send("Hello world!")
})

app.listen(3333)