const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  travelers: {
    type: Number,
    required: true,
    min: 1
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled'],
    default: 'Confirmed'
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
