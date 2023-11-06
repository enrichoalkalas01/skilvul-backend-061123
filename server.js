const express = require('express')
const app = express()
const port = 7600

app.listen(port, function() {
    console.log(`Server is running in port : ${ port }`)
})

// Routes
const Routes = require('./routes/index')
app.use('/api/v1', Routes)