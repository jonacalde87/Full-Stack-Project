const express = require("express") //import express
const app = express() // declare server variable
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware
app.use(express.json())
app.use(morgan('dev'))

//connect to db
mongoose.connect('mongodb://localhost:27017/travelLogDB',
() => console.log('Connected to database'))

//routes
app.use('/travel', require('./routes/travelRouter'))

//error handling middleware
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//server listen
app.listen(9000, () => {
    console.log('The server is running in PORT 9000')
})