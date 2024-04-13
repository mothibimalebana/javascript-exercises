const convertToCelsius = function(tempFahrenheit) {
  tempFahrenheit -= 32;
  tempFahrenheit *= (5/9);
  tempFahrenheit = Math.round(tempFahrenheit * 10) / 10;

  return tempFahrenheit
};

const convertToFahrenheit = function(tempCelsius) {
  tempCelsius *= 1.8;
  tempCelsius += 32;
  tempCelsius = Math.round(tempCelsius * 10) / 10;

  return tempCelsius
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
