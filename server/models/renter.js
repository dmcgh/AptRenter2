/* eslint-disable no-underscore-dangle, no-param-reassign, func-names, no-console */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const renterSchema = new Schema({
  name: { type: String, minlength: 2 },
  money: { type: Number, min: 1000 },
  apartment: { type: mongoose.Schema.ObjectId, ref: 'Apartment' },
  complaints: { type: Number, min: 0, max: 3 },
});


module.exports = mongoose.model('Renter', renterSchema);
