const ArticleModels = require('../../models/mongodb/scheme/Article')

async function ReadArticle(req, res, next) {
    try {
        let getDataArticle = await ArticleModels.find()
        
        res.send({
            message: 'Successfull to create data article!',
            statusText: 'Successfull to create data article!',
            statusCode: 200,
            data: getDataArticle
        })
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}

async function ReadDetailArticle(req, res, next) {
    res.send("ok article")
}

async function CreateArticle(req, res, next) {
    const {
        title, excerpt, description, author, thumbnail, category
    } = req.body

    try {
        let createDataPassing = {
            "userId": req.tokenUser.data.user,
            "title": title,
            "excerpt": excerpt,
            "description": description,
            "author": author,
            "thumbnail": thumbnail,
            "category": category,
            "created_date": new Date(),
            "updated_date": new Date(),
        }
    
        let createData = await ArticleModels.create(createDataPassing)
        
        if ( !createData) {
            res.status(400)
        } else {
            res.send({
                message: 'Successfull to create data article!',
                statusText: 'Successfull to create data article!',
                statusCode: 200,
            })
        }
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}

async function UpdateArticle(req, res, next) {
    res.send("ok article")
}

async function DeleteArticle(req, res, next) {
    res.send("ok article")
}

module.exports = {
    ReadArticle, ReadDetailArticle, CreateArticle, UpdateArticle, DeleteArticle,
}