const palindromes = function (words) {
  let str1 = [...words]
    .reverse()
    .join("")
    .replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase();
  let str2 = words.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return str1 === str2;
};

// Do not edit below this line
module.exports = palindromes;
