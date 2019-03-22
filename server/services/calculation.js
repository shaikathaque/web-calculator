const mongoose = require('mongoose');

const Calculation = mongoose.model('calculations');

const addCalculation = async (calculation) => {
  const calculationResult = Object.assign({}, calculation);
  calculationResult.result = performCalculation();
  const result = await new Calculation(calculationResult).save();
  return result;
};

const getCalculations = async () => {
  const calculations = await Calculation.find();
  console.log(14, calculations);
  return calculations;
};

// check if valid calculation
const isCalculationValid = () => true;

const performCalculation = () => 3;

module.exports = { addCalculation, isCalculationValid, getCalculations };
