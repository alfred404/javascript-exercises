const reverseString = function (input) {
    let chars = [...input];
    let output = [];

    for (let i = chars.length - 1; i >= 0; i--) {
        output.push(chars[i]);
    }

    return output.join('');
}

module.exports = reverseString
