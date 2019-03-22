const { performCalculation } = require('../utils/calculation');

describe('Hello Service', () => {
  test('Adds to integers correctly', () => {
    const obj = {
      firstNum: 3,
      secondNum: 3,
      operation: '+'
    };
    const result = performCalculation(obj);
    expect(result).toEqual(6);
  });
});
