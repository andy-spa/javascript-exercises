const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(array) {
  if(array.length === 0){
    return 0;
  }
  else{
  return array.reduce(function(a, b){ return a + b; });
  }
}
const multiply = function(array) {
  return array.reduce((a, b) => a * b);
};

const power = function(num, pow) {
    return Math.pow(num, pow);
};

const factorial = function(num) {
  let factorial = 1;
  if(factorial === 0){
    return 0;
  }
  for(let i = 1; i <= num; i++){
    factorial *= i
  }
  return factorial;
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
