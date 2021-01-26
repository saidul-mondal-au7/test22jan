const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
    
    availability : {
        type: Boolean,
        default: true
    },
    checkin: {
        type: Date,
        required: [true, 'Checkin date is required']
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
    });
const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
