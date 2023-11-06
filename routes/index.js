const express = require('express')
const routes = express.Router()

// Routes
const UserRoutes = require('./users/index')

routes.get('/', (req, res, next) => { res.send('Welcome to api v1 routes!') })
routes.use('/auth', UserRoutes)

module.exports = routes