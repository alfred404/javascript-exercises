const repeatString = function (input, numberOfTimes) {
    if (numberOfTimes < 0) {
        return 'ERROR';
    }

    let output = '';
    for (let i = 0; i < numberOfTimes; i++) {
        output += input;
    }

    return output;
};

module.exports = repeatString;
