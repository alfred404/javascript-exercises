const palindromes = (input) => {
  const string = input.toLowerCase().replace(/[^a-z]/ig, '');
  const reversed = [...string].reverse().join('');

  return string === reversed;
};

module.exports = palindromes;
