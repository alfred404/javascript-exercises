const calculator = require('./calculator.js');

describe('add', () => {
  it('adds 0 and 0', () => {
    expect(calculator.add(0, 0)).toEqual(0);
  });

  it('adds 2 and 2', () => {
    expect(calculator.add(2, 2)).toEqual(4);
  });

  it('adds positive numbers', () => {
    expect(calculator.add(2, 6)).toEqual(8);
  });
});

describe('subtract', () => {
  it('subtracts numbers', () => {
    expect(calculator.subtract(10, 4)).toEqual(6);
  });
});

describe('sum', () => {
  it('computes the sum of an empty array', () => {
    expect(calculator.sum([])).toEqual(0);
  });

  it('computes the sum of an array of one number', () => {
    expect(calculator.sum([7])).toEqual(7);
  });

  it('computes the sum of an array of two numbers', () => {
    expect(calculator.sum([7, 11])).toEqual(18);
  });

  it('computes the sum of an array of many numbers', () => {
    expect(calculator.sum([1, 3, 5, 7, 9])).toEqual(25);
  });
});

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(calculator.multiply([2, 4])).toEqual(8);
  });

  it('multiplies several numbers', () => {
    expect(calculator.multiply([2, 4, 6, 8, 10, 12, 14])).toEqual(645120);
  });
});

describe('power', () => {
  it('raises one number to the power of another number', () => {
    expect(calculator.power(4, 3)).toEqual(64); // 4 to third power is 64
  });
});

describe('factorial', () => {
  it('computes the factorial of 0', () => {
    expect(calculator.factorial(0)).toEqual(1); // 0! = 1
  });

  it('computes the factorial of 1', () => {
    expect(calculator.factorial(1)).toEqual(1);
  });

  it('computes the factorial of 2', () => {
    expect(calculator.factorial(2)).toEqual(2);
  });

  it('computes the factorial of 5', () => {
    expect(calculator.factorial(5)).toEqual(120);
  });

  it('computes the factorial of 10', () => {
    expect(calculator.factorial(10)).toEqual(3628800);
  });
});
