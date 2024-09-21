const convertToCelsius = function (value) {
  let celsius = ((value - 32) * 5) / 9;
  celsius = Math.round(celsius * 10) / 10;
  //return `${celsius}°C`;
  return celsius;
};

const convertToFahrenheit = function (value) {
  let fahrenheit = (value * 9) / 5 + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  //return `${fahrenheit}°F`;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
