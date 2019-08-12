const removeFromArray = (array, ...args) => array.filter((x) => !args.includes(x));

module.exports = removeFromArray;
