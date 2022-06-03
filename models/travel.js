const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Travel blueprint
const travelSchema = new Schema({
    city: {
        type: String,
        required: true,
        enum:["Enterprise", "Dothan", "Troy", "Fort Rucker", "Daleville"]
    },
    restaurant: String,
    hotel: String,
    placesToVisit: String,
    cost: Number
})

module.exports = mongoose.model('Travel', travelSchema)