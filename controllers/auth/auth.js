function Register(req, res, next) {
    res.send('register here..')
}

function Login(req, res, next) {
    res.send('login here..')
}

module.exports = {
    Register,
    Login,
}