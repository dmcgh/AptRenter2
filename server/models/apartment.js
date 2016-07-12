/* eslint-disable no-underscore-dangle, no-param-reassign, func-names, no-console */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  name: { type: String },
  sqft: { type: Number, min: 500, max: 2500 },
  bdrm: { type: Number, min: 1, max: 4 },
  floor: { type: Number },
  rent: { type: Number, min: 1000 },
  deposit: { type: Number, min: 50 },
  dueDate: { type: Number, min: 1, max: 31 },
  lateFee: { type: Number, min: 10 },
  leaseEnd: { type: Date },
  collectedRent: { type: Number, min: 0 },
  renter: { type: mongoose.Schema.ObjectId, ref: 'Renter' },
});


module.exports = mongoose.model('Apartment', apartmentSchema);
