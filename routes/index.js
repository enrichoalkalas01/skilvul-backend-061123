const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('Welcome to api v1 routes!')
})

module.exports = routes