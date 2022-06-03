const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Travel blueprint
const travelSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    //Date,
    cost: Number,
    placesToVisit: String
})

module.exports = mongoose.model('Travel', travelSchema)