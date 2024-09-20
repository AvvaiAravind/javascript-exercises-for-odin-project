const reverseString = function (str) {
  let string = str.split("");
  string = string.reverse();
  return (string = string.join(""));
};

// Do not edit below this line
module.exports = reverseString;
