const express = require('express')
const routes = express.Router()

// Controllers
const ArticleController = require('../../controllers/article/article')

// Middlewares
const { verifyToken, verifyJWTToken } = require('../../middlewares/JWT')

routes.get('/', ArticleController.ReadArticle)
routes.get('/:id', ArticleController.ReadDetailArticle)
routes.post('/', [verifyToken, verifyJWTToken], ArticleController.CreateArticle)
routes.put('/', [verifyToken, verifyJWTToken], ArticleController.UpdateArticle)
routes.delete('/', [verifyToken, verifyJWTToken], ArticleController.DeleteArticle)

module.exports = routes