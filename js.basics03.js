// function is a block of code, that does something and returns the output
// 

function printSomething(){
    console.log('Hello World')
}
console.log(printSomething())

let x = 10 + 30
//takes two parameters a, b
function addNumbers(a,b){
    return a + b
}
console.log(addNumbers(10,20))
console.log(addNumbers(9,87))
console.log(addNumbers(2,45))

function multiplyNumber(x, y){
    return x*y
}
console.log(multiplyNumber(2,45))

function giveMeSquare(a){
    return a * a
}

console.log(giveMeSquare(25))

function findBiggest(a, b){
    if(a > b) return a
    else return b
}
// write a simple function to find area of triangle
// 1/2 * b * h
console.log(findBiggest(100,200))

function isOdd(a)
{
    return a % 2 == 1
}
console.log('Is Odd '+ isOdd(9))

function findLengthOfArray(arr){
    return arr.length
}
const arr = ['India','USA','Mexico','UK','France']
console.log(findLengthOfArray(arr))