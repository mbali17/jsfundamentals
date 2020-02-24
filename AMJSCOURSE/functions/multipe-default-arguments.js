//Multiple arguments
let add = function(a, b, c) {
  return a + b + c;
};
let val = add(1, 4, 6);
console.log('val: ' + val);
/*
    Returns the name and score for the player.
    The default name for the player if not passed is "anonymous"
    The default score for the player if not passed is 0
*/
let scoreText = function(name = 'anonymous', score = 0) {
  return 'Name: ' + name + ' score: ' + score;
};

console.log(scoreText('ali', 20));
/*
    call with no name and score.Requires us to pass undefined as the first param because it would just assign the value that is not meant for them . For e.g: if we invoke the above scoreText function with 99 as param then the name param would get this value which is not intended
*/
console.log(scoreText(undefined, 20));
/*
    function arguments in JS can be assigned default values if there are no values passed.Here 
    the tip percentage has default value and this value would be used if the value for this argument is not passed.
*/
let tipCalculator = function(priceForTheOrder, tipPercentage = 20) {
  return priceForTheOrder * (tipPercentage / 100);
};

console.log('order 1: ' + tipCalculator(100, 30));
