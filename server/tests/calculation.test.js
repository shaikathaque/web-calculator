const { performCalculation } = require('../utils/calculation');

describe('Hello Service', () => {
  test('Returns Hello World', () => {
    const obj = {
      firstNum: 3,
      secondNum: 3,
      operation: '+'
    };
    const result = performCalculation(obj);
    expect(result).toEqual(6);
  });
});
