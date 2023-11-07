const UserModels = require("../../models").Users

async function Register(req, res, next) {
    const { username, password, email } = req.body

    let dataPassingToDB = {
        username: username,
        password: password,
        email: email,
        firstname: '-',
        lastname: '-'
    }

    let createdData = await UserModels.create(dataPassingToDB)

    if ( !createdData.dataValues ) {
        res.status(400).send({
            message: 'wrong username or password',
            statusCode: 400
        })
    } else {
        res.send({
            message: 'successfull to create data users!',
            statusCode: 200,
        })
    }
}

async function Login(req, res, next) {
    const getUsers = await UserModels.findOne({
        username: req.body.username
    })

    if ( req.body.password !== getUsers.dataValues.password ) {
        res.status(400).send({
            message: 'wrong username or password',
            statusCode: 400
        })
    } else {
        console.log(getUsers.dataValues)
        // console.log(req.body)
        res.send('login here..')
    }
}

module.exports = {
    Register,
    Login,
}