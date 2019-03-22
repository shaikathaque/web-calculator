const mongoose = require("mongoose");

const User = mongoose.model("calculations");

const getHelloWorld = name => `Hello ${name}`;

const addCalculation = async name => {
  // const user = await new User({ id: 'b', name }).save();
  // return user;
};

// check if valid calculation
const isCalculationValid = () => {
  return true;
};

module.exports = { addCalculation, isCalculationValid };
