const convertToCelsius = function(temperature) {
  
  if (Number.isNaN(temperature)) {
    return 'ERROR';
  }

  let celsius = (temperature - 32) * (5 / 9);

  let preRoundCelsius = celsius * 10;
  let roundCelsius = (Math.round(preRoundCelsius)) / 10;

  return roundCelsius;
};

const convertToFahrenheit = function(temperature) {

  if (Number.isNaN(temperature)) {
    return 'ERROR';
  }

  let fahrenheit = (temperature * 9 / 5 + 32);

  let preRoundFahrenheit = fahrenheit * 10;
  let roundFahrenheit = (Math.round(preRoundFahrenheit)) / 10;

  return roundFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
