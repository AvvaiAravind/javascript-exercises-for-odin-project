const sumAll = function (num1, num2) {
  let result = 0;
  let lesser = 0;
  let larger = 0;
  if (
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    Array.isArray(num1) ||
    Array.isArray(num2) ||
    typeof num1 === "string" ||
    typeof num2 === "string"
  ) {
    return "ERROR";
  } else if (num1 > num2) {
    lesser = num2;
    larger = num1;
  } else if (num1 < num2) {
    lesser = num1;
    larger = num2;
  } else {
    return "ERROR";
  }
  for (i = lesser; i <= larger; i++) {
    result += i;
  }
  return result;
};

/* if (min > max) {
  const temp = min;
  min = max;
  max = temp;
} */
//Destructuring the array
// if (min > max) [min, max] = [max, min];
// Do not edit below this line
module.exports = sumAll;
