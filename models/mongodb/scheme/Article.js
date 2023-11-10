const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema({
    userId: { type: String },
    title: { type: String },
    excerpt: { type: String },
    description: { type: String },
    author: { type: String },
    thumbnail: { type: String },
    category: { type: String },
    created_date: { type: Date },
    updated_date: { type: String },
})

const Article = Mongoose.model('Article', Schema)

module.exports = Article