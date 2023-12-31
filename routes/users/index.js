const express = require('express')
const routes = express.Router()

// Controllers
const AuthController = require('../../controllers/auth/auth')

// Middleware
const AuthMiddleware = require('../../middlewares/auth/bodyValidation')

routes.get('/', (req, res, next) => {
    res.send('Welcome to api v1 auth routes!')
})

routes.post('/register', [
    AuthMiddleware.bodyValidationRegister
], AuthController.RegisterMongo)

routes.post('/login', [
    AuthMiddleware.bodyValidationLogin
], AuthController.LoginMongo)

module.exports = routes