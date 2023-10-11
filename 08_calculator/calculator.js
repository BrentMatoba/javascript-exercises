const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2){
  return num1 - num2
};

//adds ALL numbers within an array, not just 2
const sum = function(array) {
  return array.reduce(function(acc, num){
    return acc + num;}
    ,0)
  }
;

const multiply = function(num1, num2) {
  return num1 * num2

};

const power = function(base, exponent) {
  return base ^ exponent
	
};

const factorial = function(number) {
    let final = 1
    for(let i = number; i >= 1; i--){
      final *= i
    }
    console.log(final)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
