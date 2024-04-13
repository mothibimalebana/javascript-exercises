const convertToCelsius = function(tempFahrenheit) {
  tempFahrenheit -= 32;
  tempFahrenheit /= 2;

  return tempFahrenheit
};

const convertToFahrenheit = function(tempCelsius) {
  tempCelsius *= 1.8;
  tempCelsius += 32;

  return tempCelsius
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
