async function ReadArticle(req, res, next) {
    res.send("ok article")
}

async function ReadDetailArticle(req, res, next) {
    res.send("ok article")
}

async function CreateArticle(req, res, next) {
    console.log(req.body)
    let createDataPassing = {
        "userId": "",
        "title": "",
        "excerpt": "",
        "description": "",
        "author": "",
        "thumbnail": "",
        "category": "",
        "created_date": "",
        "updated_date": "",
    }

    res.send("ok article")
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