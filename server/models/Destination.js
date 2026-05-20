const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  region: { type: String, required: true },
  type: { type: String, required: true },
  tagline: { type: String, required: true },
  duration: { type: String, required: true },
  inclusions: [String]
}, { timestamps: true });

module.exports = mongoose.model('Destination', destinationSchema);
