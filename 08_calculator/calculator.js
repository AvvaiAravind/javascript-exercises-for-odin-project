const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arrays) {
  let numbers = arrays;
  return numbers.reduce((sum, number) => sum + number, 0);
};

const multiply = function (arrays) {
  let numbers = arrays;
  return numbers.reduce((sum, number) => sum * number);
};

const power = function (num, pow) {
  return pow !== undefined && pow !== null ? Math.pow(num, pow) : num;
};

const factorial = function (num) {
  let total = 1;
  if (num === 0) {
    return total;
  }
  for (let i = 1; i <= num; i++) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
