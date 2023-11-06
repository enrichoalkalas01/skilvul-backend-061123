const express = require('express')
const app = express()
const port = 7600
const cors = require('cors')
const morgan = require('morgan')

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.listen(port, function() {
    console.log(`Server is running in port : ${ port }`)
})

// Routes
const Routes = require('./routes/index')
app.use('/api/v1', Routes)