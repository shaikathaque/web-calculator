const performCalculation = (expression) => {
  console.log(expression);
  const { operation, firstNum, secondNum } = expression;

  switch (operation) {
    case '+':
      // eslint-disable-next-line no-case-declarations
      const additionResult =        Number.parseFloat(firstNum) + Number.parseFloat(secondNum);
      console.log(additionResult);
      return additionResult;
    case '-':
      // eslint-disable-next-line no-case-declarations

      const subtractionResult =        Number.parseFloat(firstNum) - Number.parseFloat(secondNum);
      console.log(subtractionResult);
      return subtractionResult;
    case '*':
      // eslint-disable-next-line no-case-declarations

      const multiplicationResult =        Number.parseFloat(firstNum) * Number.parseFloat(secondNum);
      console.log(multiplicationResult);
      return multiplicationResult;
    case '/':
      // eslint-disable-next-line no-case-declarations

      const divisionResult =        Number.parseFloat(firstNum) * Number.parseFloat(secondNum);
      console.log(divisionResult);
      return divisionResult;
    default:
      return 'N/A';
  }
};

module.exports = { performCalculation };
