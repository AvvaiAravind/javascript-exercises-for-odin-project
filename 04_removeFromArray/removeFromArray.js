const removeFromArray = function (arrays, ...value) {
  //const index = arrays.indexOf(value);
  //const arr1 = arrays.slice(0, index);
  //const arr2 = arrays.slice(index + 1);
  //return arr1.concat(arr2);
  const arr = arrays;
  const result = arr.filter(remove);

  function remove(arr) {
    let newArr = [];
    if (!value.includes(arr)) {
      return (newArr += arr);
    }
  }

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
