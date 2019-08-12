const sumAll = (num1, num2) => {
  const invalidValues = [num1, num2].filter((x) => !Number.isInteger(x) || x < 0);
  if (invalidValues.length > 0) { return 'ERROR'; }

  let sum = 0;

  const nums = [num1, num2].sort(); // ascending order -- smaller number comes first
  const smaller = nums[0];
  const larger = nums[1];

  for (let i = smaller; i <= larger; i++) {
    sum += i;
  }

  return sum;
};

module.exports = sumAll;
