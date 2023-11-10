const UserModels = require('../../models/mongodb/scheme/User')
const ArticleModels = require('../../models/mongodb/scheme/Article')

module.exports = {
    async TestOne(req, res, next) {
        console.log(req.tokenUser.data.user)
        try {
            let getUserData = await UserModels.aggregate([
                {
                    $match: {
                        username: req.tokenUser.data.user
                    }
                },

                {
                    $lookup: {
                        from: 'articles',
                        localField: "username",
                        foreignField: "userId",
                        as: "articles"
                    }
                }
            ])

            console.log(getUserData)

            res.send({
                data: getUserData
            })
        } catch(error) {
            console.log(error)
            res.send("ok")
        }
    }
}