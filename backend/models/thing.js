const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  product: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);