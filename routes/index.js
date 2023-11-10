const express = require('express')
const routes = express.Router()

// Routes
const UserRoutes = require('./users/index')
const ArticleRoutes = require('./article/index')
const TestController = require('../controllers/test/index')

routes.get('/', (req, res, next) => { res.send('Welcome to api v1 routes!') })
routes.use('/auth', UserRoutes)
routes.use('/article', ArticleRoutes)

const { verifyToken, verifyJWTToken } = require('../middlewares/JWT')

routes.get('/article', [verifyToken, verifyJWTToken], (req, res) => {
    res.send('ok')
})

routes.get('/test',[verifyToken, verifyJWTToken], TestController.TestOne)

routes.test

module.exports = routes