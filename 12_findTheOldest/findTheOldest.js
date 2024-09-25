const findTheOldest = function (arrays) {
  let currentYear = new Date().getFullYear();
  const oldest = arrays.reduce((old, cur) => {
    let older =
      (old.yearOfDeath ? old.yearOfDeath : currentYear) - old.yearOfBirth;
    let current =
      (cur.yearOfDeath ? cur.yearOfDeath : currentYear) - cur.yearOfBirth;
    return current > older ? cur : old;
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
