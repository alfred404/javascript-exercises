const ftoc = (temp) => {
  const foo = (temp - 32) * (5 / 9);
  return Math.round(foo * 10) / 10;
};


const ctof = (temp) => {
  const foo = (temp * 1.8) + 32;
  return Math.round(foo * 10) / 10;
};

module.exports = {
  ftoc,
  ctof,
};
