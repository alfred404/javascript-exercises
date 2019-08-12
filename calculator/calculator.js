function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function sum(array) {
  return array.reduce((a, b) => a + b, 0);
}

function multiply(nums) {
  return nums.reduce((a, b) => a * b);
}

function power(num1, num2) {
  return num1 ** num2;
}

function factorial(num) {
  if (num === 0) { return 1; }
  return num * factorial(num - 1);
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
