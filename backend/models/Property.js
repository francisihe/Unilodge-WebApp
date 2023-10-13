const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: String,
  address: String,
  propertyType: String,
  propertyStatus: String,
  category: String,
  description: String,
  price: Number,
  features: [String],
  photos: [String],
  size: String,
});

const PropertyModel = mongoose.model('Property', propertySchema);

module.exports = PropertyModel;