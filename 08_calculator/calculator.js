const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) => total + number, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((total, number) => total * number);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(number) {
  let total = 1;
  if (number === 0) {
    return total;
  }
  for (let i = 1; i <= number; i++) {
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
  factorial
};
