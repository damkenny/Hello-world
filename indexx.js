/*Exercises on introduction to programming
1.Write a program that reads in (from standard input) a price of an item of clothing in dollars and then writes out to standard output how much the price would be if that item was at a 10% discount.*/

/*

var price of a cloth = X;

var price of the cloth after discount = X + 10%;

var X =[10, 20, 30, 40];

console.log ()

/*alert

console.log

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3


/
2.*Write a program that reads in two numbers from standard input: the price of sneakers before discount, and discounted price. The program should output the percentage of the sneakers that were discounted.

<!Doctype html>
<html>
<body>
    <input id="price">Price
    <br><br>
    <input id="discount">%
    <br><br>
    <button onclick="getPrice()">
Get total
</button>
    <br><br>
    <input readonly id="total">
    <script>
getPrice = function() {
var numVal1 = Number(document.getElementById("price").value);
var numVal2 = Number(document.getElementById("discount").value) / 100;
var totalValue = numVal1 - (numVal1 * numVal2)
            document.getElementById("total").value = 
<html>
</body>


/*</script>
3. Write a program that reads in (from standard input) the length of a movie in hours and minutes. The program should calculate and write out (to standard output) the length of the movie in minutes.


Write a program that reads in (from standard input) the length of a movie in hours, minutes, and seconds. The program should calculate and write out (to standard output) the length of the movie in seconds.
Write a program that reads in one natural number (let us call it n) and then prints out squares of the first n natural numbers.
Write a program that reads in two numbers (from standard input) and then writes out the value of the smaller ones.
Write a program that reads in three different numbers and then writes out the value of the smallest one.
Write a program that reads in one natural number and then writes out a message telling whether the given number has exactly two digits.
Let us play with corporate taxes. Write a program that reads in two numbers: the annual income and annual expenses of a company, expressed in dollars. The program has to write out the amount of tax that the company has to pay; let us call it the profit tax. If the expenses are greater than the income, then the profit tax equals 0 dollars. Otherwise, let the profit tax be equal to 20% of the profits, where profits equal the difference of income and expenses.

Write a program that reads in a number n. Then it should write out the first power of number 10 that is greater than number n. The powers of number 10 are 1, 10, 100, 1000, 10000, and so on.
N = 50, a = 
for(i = 1; i < power.length; i++){
If (p10 > n){
Return n}
}
Write a program that reads in a number n. Then it should write out all the powers of number 10 that are smaller than the number n.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

Write a function named Sub which takes two arguments of type double, and returns the result of subtracting the second one from the first one. Use this function to calculate 3.2 – 8 and write out the result. The result should be -4.8.*/


var Sub = 3.2 - 8;

console.log(Sub);


/*Write a JavaScript program to get a list of elements that exist in both arrays.

var fruits = ["Banana", "Orange", "Apple", "Mango"];

var drinks = ["Apple", "coke", "fanta", "Orange"]

= fruits.indexOf("Apple");


14. Write a JavaScript program to remove specified elements from the left of a given array of elements.*/


var ourArray = ["kenny", "A", ["girl"]];

var removedFromOurArray = ourArray.shift();

console.log(removedFromOurArray);
/*
15. Write a JavaScript program to filter out the element(s) of a given array, that has one of the specified values.*/



/*
16. Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.
*/
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt);
var x
console.log(x);

/*17. Write a JavaScript program to get a random number in the specified range.
*/
function r() {
  return Math.floor(Math.random() * 255);
}

console.log(r());

/*

18.  Write a JavaScript program to round a number to a specified amount of digits. 

*/
  var num = 5.56789;
  var n = num.toFixed();

console.log(n);


/*19. Write a JavaScript program to capitalize the first letter of every word in a string. 



*/
const Weather= "rain";
const upper = Weather.toUpperCase();

console.log(upper);


var publication = "heavy";
var capitalise = publication[0].toUpperCase();
console.log(capitalise);


/*
20.  Write a JavaScript program to get all the elements of an array except the last one. */
 

var middlePoints = ['start', 'A', 'B', 'C', 'end'];
var origin = middlePoints.shift();
var destination = middlePoints.pop();

console.log(destination);

