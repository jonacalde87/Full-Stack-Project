const express = require('express')
const travelRouter = express.Router()
const Travel = require('../models/travel')

//Routes
travelRouter.route('/')
    //Get all
    .get((req, res, next) => {
        Travel.find((err, travels) => {
            if(err) {
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
             if(err) {
                 res.status(500)
                 return next(err)
             }
             return res.status(201).send(savedTravel)
        })
    })


module.exports = travelRouter