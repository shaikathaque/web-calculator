const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const calculationSchema = new Schema({
  label: { type: String, unique: true, required: true },
  firstNum: { type: Number, required: true },
  secondNum: { type: Number, required: true },
  operation: { type: String, required: true },
  result: { type: Number, required: true }
});

mongoose.model('calculations', calculationSchema);
