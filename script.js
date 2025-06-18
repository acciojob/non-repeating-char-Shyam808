function firstNonRepeatedChar(str) {
  const freq = {};

  // Count character frequency
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}

module.exports = firstNonRepeatedChar;
