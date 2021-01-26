const express = require('express');
const router = express.Router();

const Booking = require('../models/bookingModel');

// get a list of bookings from db
router.get('/bookings', (req, res, next) => {
    Booking.find({hotel: req.body.hotel})
    .then( room => res.send(room) );
});

// add a new booking to db
router.post('/bookings', (req, res, next) => {
    if (Booking.length < 10){
        Booking.create(req.body).then( booking => {
            res.send(booking);
        }).catch(next);
    }else{
        res.send("Booking not available!!")
    } 
    
});

module.exports = router;