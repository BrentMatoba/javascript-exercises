const convertToCelsius = function(farenheit) {
  let celsius = (farenheit-32) * 5/9
  return celsius
};

const convertToFahrenheit = function(celsius) {
  let farenheit = (celsius / (5/9)) + 32
  return farenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
