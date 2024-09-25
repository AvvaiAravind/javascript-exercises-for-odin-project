const fibonacci = function (arg) {
  let a = 0;
  let b = 1;
  let total = 0;
  let num = parseInt(arg);
  if (num < 0) return "OOPs";
  if (num === 0 || num === 1) return num;
  for (let i = 2; i < num; i++) {
    total = a + b;
    a = b;
    b = total;
  }
  return total;
};

// Do not edit below this line
module.exports = fibonacci;
