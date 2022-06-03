const express = require('express')
const travelRouter = express.Router()
const Travel = require('../models/travel')

//Routes
travelRouter.route('/')
    //Get all
    .get((req, res, next) => {
        Travel.find((err, travels) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(travels)
        })
    })

    //Post one
    .post((req, res, next) => {
        const newTravel = new Travel(req.body)
        newTravel.save((err, savedTravel) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedTravel)
        })
    })

//Get one (using params)
travelRouter.route('/:travelId') // this is the parameter <:>
    .get((req, res, next) => {
        const travelId = req.params.travelId
        Travel.findById(travelId, (err, travel) => {
            if (!travelId) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(travel)
        })
    })

//get by city (query string) to filter results
travelRouter.route('/search/city') //localhost:9000/travel/search/city?city=Troy
    .get((req, res, next) => {
        Travel.find({ city: req.query.city }, (err, travel) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(travel)
        })
    })

//delete one
travelRouter.delete('/:travelId', (req, res, next) => {
    Travel.findOneAndDelete({ _id: req.params.travelId }, (err, deletedTravel) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedTravel.placesToVisit} at ${deletedTravel.city} from the database`)
    })
})

//update one
travelRouter.put('/:travelId', (req, res, next) => {
    Travel.findOneAndUpdate(
        { _id: req.params.travelId },
        req.body,
        { new: true },
        (err, updatedTravel) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedTravel)
        })
})

module.exports = travelRouter