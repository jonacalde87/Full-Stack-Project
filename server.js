const express = require("express") //import express
const app = express() // declare server variable
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require("path") // heroku deployment
const port = process.env.PORT || 9000; //HEROKU to hide username and password
require("dotenv").config()

//middleware
app.use(express.json())
app.use(morgan('dev'))

// ... other app.use middleware HEROKU
app.use(express.static(path.join(__dirname, "client", "build")))

//connect to db
// mongoose.connect('mongodb://localhost:27017/travelLogDB',
// () => console.log('Connected to database'))
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });


//routes
app.use('/travel', require('./routes/travelRouter'))

//error handling middleware
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Right before your app.listen(), add this: HEROKU
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => {
    console.log('The server is running in PORT 9000')
})

// //server listen
// app.listen(9000, () => {
//     console.log('The server is running in PORT 9000')
// })


//mongodb+srv://Mofongo24:Mofongo24@cluster0.fxgetca.mongodb.net/travel-log?retryWrites=true&w=majority