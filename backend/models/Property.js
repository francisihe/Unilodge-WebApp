const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: String,
    location: String,
    type: String,
    propertyStatus: String,
    category: String,
    description: String,
    price: Number,
    discountPrice: Number,
    discountPercentage: Number,
    bedrooms: Number,
    bathrooms: Number,
    size: Number,
    photos: [String],
    features: [String],
})

const PropertyModel = mongoose.model('Property', propertySchema);

module.exports = PropertyModel;