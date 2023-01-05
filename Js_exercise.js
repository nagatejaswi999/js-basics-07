//write a function that counts the number of character in a string the method shoud return thenumber
var str = "Hello, world!";
console.log(str.length);

//write a function that accepts an two numbers and return the largest number
function max(a, b) {
   if (a > b) {
      return a;
   }
}
console.log(Math.max(1, 3));
//write a function that returns boolean flag if a number is between 5000 and 9999
function isBoolean(num) {
   if (num > 500 && num < 999)
      return true;
   else return false;
}
//write a function that returns boolean flag if a number is between 5000 and 9999
console.log(isBoolean(600))
//write a function that accepts a number and returns the cube root of the number
var getNumber = prompt("Enter a number");
var cube = function (x) {
   return x * x * x;
};
cube(getNumber);