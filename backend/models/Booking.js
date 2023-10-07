const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  property: {type:mongoose.Schema.Types.ObjectId, required:true, ref:'Property'},
  user: {type:mongoose.Schema.Types.ObjectId, required:true},
  inspectionDate: {type:Date, required:true},
  name: {type:String, required:true},
  phone: {type:String, required:true},
  email: {type:String, required: true},
});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;