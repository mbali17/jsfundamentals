/*
    Template strings provide a way to represent a string and a variable together without concatenation. This uses a separate syntax using the '``'
*/
var name = 'tom';
//In order to use variables in the string we need to use ${}
console.log(`my name is ${name}`);

let tipCalculator = function(priceForTheOrder, tipPercentage = 20) {
  let tip = priceForTheOrder * (tipPercentage / 100);
  return `The ${tipPercentage}% tip for the order price ${priceForTheOrder}$ is ${tip}$`;
};

console.log(tipCalculator(100));
console.log(tipCalculator(300, 10));
