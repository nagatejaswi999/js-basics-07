//Create a variable called X, assign the value 50 to it:
//var x  = 50;

//Display the sum of 5+10, using the varuable: x and y
//var x = 5;
//var y = 10;
//document.gtElementById("demo").innerHTML = x + y;

//Create a varialbe called Z, assign x+y to it, and display the result in an alert box
// var x  = 5;
// var y = 10;
// var z = x + y;
// alert(z);

// On one sigle line, declare threee variable with the following names and values:
// firstName = "John"
// lastName = "Doe"
// age = 35
// var firstName = "John" ,  lastName = "Doe" , age = 35;

// JS Operators
// Multiply 10 with 5, and alert the result:
// alert(10*5);

// Divide 10 by 2, and alert the result:
// alert(10/2);

// Alert the remainder when 15 is divided by 9:
// alert(15%9);

// Use the assignment operator that will result in x being 15 (same as x = x + y )
// x = 10;
// y = 5;
// x += y;

// Use the correct assignment operator that will result in X being 50 (same as X = X * Y);
// x = 10;
// y = 5;
// x *= y;

//JS Data types and Arrays

// Number
//var length = 16; 

// String
//var lastName = "Johnson"; 

// Object
//var x = {
//   firstName: "John",
//   lastName: "Doe"
// };  

// Array with for elements
//var myArray = [1,2,3,4];

// Declare an empty array that will contains for 4 elements
//var myArray = new Array(4);

// JS Functions

// Execyte the function names myFunction
// function myFunctin()  {
//   alert("Hello World!");
// }
// myFunctin();

// Create a function called "myFunction()"
// function myFunction{
//   alert("Hello World");
// }

// Make the function return "Hello"
// function mmyFunction() {
//   return "Hello";
// }
// document.getElementById("demo").innerHTML = myFunctin();

// Make the function display "Hello" in the inner HTML of the element with the ID "demo"
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello";
// }

//JS Object

// Alert "John" by extracting information from the person Object
// var person =  {
//   firstName : "John",
//   lastName : "Doe"
// };
// alert(person.firstName);

// Add the following property and value to the person object: country: Norway.
// var person = {
//   firstName: "John",
//   lastName: "Doe",
//   country : "Norway"
// };

// Create an object called person with name = John, age = 50. Then, access the object to alert("John is 50")
// var person = {
//   name : "John" , age : 50
// };
// alert(person.name + " is " + person.age);

// JS String

// Use the length property to alert the length of txt.
// var txt = "Hello World!";
// var x = txt.length;
// alert(x);

// Use escape characters to alert We are "Vikings".
// var txt = " ";
// We are \"Vikings\"";
// alert(txt);

// Conceteate the two string to alert "Hello World"!
// var str1 = "Hello ";
// var str2 = "World";
// alert(str1 + str2);

// JS String Methods

// Find the position of the character h in the string txt.
// var txt = "abcdefghijklm";
// var pos = txt.indexOf('h');

// Use the slice method to return the word "bananas".
// var txt = I can eat bananas all day";
// var x = txt.slice(10,17);

// Use the correct String method to replace the word "Hello" with the word "Welcome".
// var txt = "Hello World";
// txt = txt.replace("Hello" , "Welcome");

// Convert the value of txt to upper case.
// var txt = "Hello World";
// txt = txt.toUpperCase();

// Convert the value of txt to lower case.
// var txt = "Hello World";
// txt =  txt.toLowerCase();

// JS array

// Get the value "Volvo" from the cars array.
// var cars = ["Saab" , "Volvo" , "BMW"];
// var x = cars[1];

// Change the first item of cars to "Ford".
// var cars = ["Volvo", "Jeep", "Mercedes"];
// cars[0] = "Ford";

// Alert the number of items in an array, using the correct Array method.
// var cars = ["Volvo", "Jeep", "Mercedes"];
// alert(cars.length );

// JS Array Methods

// Use the correct Array method to remove the last item of the fruits array.
// var fruits = ["Banana", "Orange", "Apple"];
// fruits.pop();

// Use the correct Array method to add "Kiwi" to the fruits array.
// var fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Kiwi");

// Use the splice() method to remove "Orange" and "Apple" from fruits.
// var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.splice(1, 2 );

//Js array Sort

// Use the correct Array method to sort the fruits array alphabetically.
// var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.sort();

//JS dates

// Create a Date object and alert the current date and time.
// var d = new Date();
// alert(d);

// Use the correct Date method to extract the year (four digits) out of a date object.
// var d = new Date();
// year =  d.getFullYear();

// Use the correct Date method to get the month (0-11) out of a date object.
// var d = new Date();
// month = d.getMonth();

// Use the correct Date method to set the year of a date object to 2020.
// var d = new Date();
// d.setFullYear(2020);

//JS Math

// Use the correct Math method to create a random number.
// var r = Math.random();

// Use the correct Math method to return the largest number of 10 and 20.
// var x =  Math.max(10, 20);

// Use the correct Math method to round a number to the nearest integer.
// var x = Math.round(5.3);

// Use the correct Math method to get the square root of 9.
// var x = Math.sqrt(9);

//JS Comparison

// Choose the correct comparison operator to alert true, when x is greater than y.
// x = 10;
// y = 5;
// alert(x > y);

// Choose the correct comparison operator to alert true, when x is equal to y.
// x = 10;
// y = 10;
// alert(x == y);

// Choose the correct comparison operator to alert true, when x is NOT equal to y.
// x = 10;
// y = 5;
// alert(x != y);

// Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
// var age = n;
// var voteable = (age < 18) ? "Too young" : "Old enough";
// alert(voteable);

//JS Conditions

// Fix the if statement to alert "Hello World" if x is greater than y.
// if (x > y)
// {
//   alert("Hello World");
// }

// Fix the if statement to alert "Hello World" if x is greater than y, otherwise alert "Goodbye".
// if (x > y)
// {
//   alert("Hello World");
// }
// else
// {
//   alert("Goodbye");
// }

// JS Switch

// Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".
// switch
// (fruits) {  
// case "Banana":
//     alert("Hello")
//     break;
// case "Apple":
//     alert("Welcome")
//     break;    
// }

// Add a section that will alert("Neither") if fruits is neither "banana" nor "apple".
// switch(fruits) {
//   case "Banana":
//     alert("Hello")
//     break;
//   case "Apple":
//     alert("Welcome")
//     break;
//   default:
//     alert("Neither");
// }

// JS For Loops

// Create a loop that runs from 0 to 9.
// var i;
// for (i = 0; i< 10; i++)
// {
//   console.log(i);
// }

// Create a loop that runs through each item in the fruits array.
// var fruits = ["Apple", "Banana", "Orange"];
// for (x in fruits)
// {
//   console.log(x);
// }

// JS while Loops

// Create a loop that runs as long as i is less than 10.
// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++
// }

// Create a loop that runs as long as i is less than 10, but increase i with 2 each time.
// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i= i+2;
// }

// JS Breack Loops

// Make the loop stop when i is 5.
// for (i = 0; i < 10; i++) {
//   console.log(i);
//   if (i == 5) {  
//       break;
//   }
// }

// Make the loop jump to the next iteration when i is 5.
// for (i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

//JS HTML DOM

// Use the getElementById method to find the <p> element, and change its text to "Hello".
// <p id="demo"></p>
// <script>
//   document.getElementById("demo").innerHTML= "Hello";
// </script>

// Change the text of the first element that has the class name "test".
// <p class = "test"> </p>
// <p class = "test"> </p>

// <script>
//   documeent.getElementsByClassName("test")[0].innerHTML = "Hello";
// </script>

// Use HTML DOM to change the value of the image's src attribute.
// <script>
//   document.getElementById("image").src = "pic_mountain.jpg";
// </script>

// Use HTML DOM to change the value of the input field.
// <script>
//   document.getElementById("myText").value = "Hello";
// </script>

// Change the text color of the <p> element to "red".
// <p id="demo"></p>
// <script>
//   document.getElementById("demo").style.color = "red";
// </script>

// Change the font size of the p element to 40 pixels.
// <p id="demo"></p>
// <script>
//   document.getElementById("demo").style.fontSize = "40px";
// </script>

// Use the CSS display property to hide the p element.
// <p id="demo"></p>
// <script>
//   document.getElementById("demo").style.display = "none";
// </script>

// Use the eventListener to assign an onclick event to the <button> element.
// <button id="demo">Click me1</button>
// <script>
//   document.getElementById("demo").addEventListener("click", myFunction);
// </script>