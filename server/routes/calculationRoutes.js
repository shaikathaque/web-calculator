const {
  isCalculationValid,
  addCalculation,
  getCalculations
} = require('../services/calculation');

module.exports = (app) => {
  app.get('/api/calculation/', async (req, res) => {
    try {
      const calculations = await getCalculations();
      res.send(calculations);
    } catch (err) {
      console.log('Error getting Hello World', err);
      res.sendStatus(500);
    }
  });

  // post request that expects a label, firstNum, secondNum, operation, result
  app.post('/api/calculation/', async (req, res) => {
    const calculation = req.body;

    // TODO: show relevant error on duplicate calculations
    if (!isCalculationValid(calculation)) {
      // if somethingis wrong with the request, return bad request error
      res.send(400);
    } else {
      try {
        const result = await addCalculation(calculation);
        res.send(result);
      } catch (err) {
        console.log('Error adding calcuation to DB', err);
        res.sendStatus(500);
      }
    }
  });
};
