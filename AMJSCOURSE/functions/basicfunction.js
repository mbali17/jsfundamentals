let inputTemperature = [32, 68, 100];
let convertFarhenheitToCelcius = function(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
};

for (var i = 0; i < inputTemperature.length; i++) {
  console.log(
    inputTemperature[i] +
      'f = ' +
      convertFarhenheitToCelcius(inputTemperature[i]) +
      ' c'
  );
}
