const mongoose = require('mongoose')

const url = "mongodb+srv://enrichoalkalas11:admin123@cluster0.1k5zfyu.mongodb.net/UMKM"

const ConnectionDB = async () => {
    try {
        const Connect = await mongoose.connect(url)
        console.log(`Mongo Connected : ${ Connect.connection.host }`)
    } catch (error) {
        console.log(error)
        // process.exit(1)
    }
}

module.exports = ConnectionDB