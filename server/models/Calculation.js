const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const calculationSchema = new Schema({
  label: { type: String, unique: true, required: true },
  firstNum: { type: Number, required: true },
  secondNum: { type: Number, required: true },
  operand: { type: String, required: true }
});

mongoose.model("users", userSchema);
