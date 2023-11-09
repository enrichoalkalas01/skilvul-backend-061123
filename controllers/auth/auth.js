const UserModels = require("../../models").Users
const Cryptr = require('cryptr')
const CryptrNew = new Cryptr('secret-no-rumpi')
const JWT = require('jsonwebtoken')
const UserModelsMongo = require('../../models/mongodb/scheme/User')

async function Register(req, res, next) {
    const { username, password, email } = req.body
    
    let getDataUsers = await UserModels.findOne({
        where: {
            username: username
        }
    })

    if ( getDataUsers ) {
        res.status(400).send({
            message: 'Data is exists, please create another one!',
            statusCode: 400
        })
    } else {
        let dataPassingToDB = {
            username: username,
            password: CryptrNew.encrypt(password),
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
}

async function Login(req, res, next) {
    console.log(req.body.username)
    const getUsers = await UserModels.findOne({
        where: {
            username: req.body.username
        }
    })

    if ( !getUsers ) {
        res.status(400).send({
            message: 'Data is not exist!',
            statusCode: 400
        })
    } else {
        let passwordUser = CryptrNew.decrypt(getUsers.dataValues.password)
        if ( req.body.password !== passwordUser ) {
            res.status(400).send({
                message: 'Username or Password is wrong!',
                statusCode: 400
            })
        } else {
            let expiredToken = Math.floor(Date.now() / 1000) + (60 * 60)
            let createAccessToken = JWT.sign({
                exp: expiredToken,
                data: {
                    user: getUsers.dataValues.username,
                    email: getUsers.dataValues.emal,
                    no: getUsers.dataValues.id,
                }
            }, 'secret-no-rumpi')

            let dataPassingClient = {
                access_token: createAccessToken, // access token expired 1 day
                refresh_token: createAccessToken, // refresh token expired 1 month
                expired_date: expiredToken,
                user: getUsers.dataValues.username,
                id: getUsers.dataValues.id,
            }

            res.status(200).send({
                message: 'Successfull to login user!',
                statusText: 'Successfull to login user!',
                statusCode: 200,
                data: dataPassingClient
            })
        }
    }
}

async function RegisterMongo(req, res, next) {
    const { username, password, email } = req.body

    try {
        let getUser = await UserModelsMongo.findOne({
            username: username
        })

        if ( getUser ) {
            res.status(400).send({
                message: 'Data is exists, please create another one!',
                statusCode: 400
            })
        } else {
            let dataPassingToDB = {
                username: username,
                password: CryptrNew.encrypt(password),
                email: email,
                firstname: '-',
                lastname: '-',
                age: 10,
            }
    
            let createdData = await UserModelsMongo.create(dataPassingToDB)
    
            if ( !createdData ) {
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
    } catch(error) {
        console.log(error)
        res.stats(400)
    }
}

module.exports = {
    Register,
    Login,
    RegisterMongo,
}