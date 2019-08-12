const removeFromArray = function (array, ...args) {
    return array.filter(x => !args.includes(x));
}

module.exports = removeFromArray
