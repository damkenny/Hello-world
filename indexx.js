/*Exercises on introduction to programming

1.Write a program that reads in (from standard input) a price of an item of clothing in 
dollars and then writes out to standard output how much the price would be if that item was at a 10% discount.*/


function price (n) {
  // let pr = n;
  let dc = n - (n / 10);
  return dc;
}

console.log(price(50));

/*(another option

function getDisc(n,y) {
  let disc = 1 - (y/n)
  let discount = disc * 10;
  return discount;
}

console.log(getDisc(50)));
/*
2.*Write a program that reads in two numbers from standard input: the price of sneakers before discount, and discounted price.
 The program should output the percentage of the sneakers that were discounted.*/


  function getPrice (n, y) {
  //discount in percent
  const disc = n * y/100
  // price minus the discount
  const pr = n - disc
  //out put the balance
    console.log(pr);
  }

  getPrice(50, 10)

  /*

3. Write a program that reads in (from standard input) the length of a movie in hours and minutes. 

The program should calculate and write out (to standard output) the length of the movie in minutes.*/


function timeConvert(n) {
  var num = n;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  var rsec = rminutes * 60;
  return num + " minutes = " + rhours + " hour(s), " + rminutes + " minute(s) and " + rsec + " second(s).";
  }
  
  console.log(timeConvert(200));


  // console.log(hr, min, sec);
//}
totalSec(200, 30, 9)

/*4.Write a program that reads in (from standard input) the length of a movie in hours, minutes, and seconds. 
The program should calculate and write out (to standard output) the length of the movie in seconds.*/

function timeConvert(n) {
  var num = n;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;

//convert min to sec
// add the 2 results with sec
console.log(hr, min, sec);
}

function totalSec(hr, min, sec){
  // convert hr to sec
  const rhr = hr * 360;
  // convert min to sec
  const rmin = min * 60;
  //add the 2 results to sec
  const res = rhr + rmin + sec
  console.log(res + " seconds");


/*
5.Write a program that reads in one natural number (let us call it n) and then prints out squares of the first n natural numbers.

*/
function printSquares(nz) { 
        // Initialize 'square' and previous value of 'x' 
        let square = 0, prev_x = 0; 
   
        // Calculate and print squares 
        for (let x = 0; x < nz; x++) 
        { 
            // Update value of square using previous value 
            square = (square + x + prev_x); 
   
            // Print square and update prev for next iteration 
            console.log(square + " "); 
            prev_x = x; 
        } 
    } 
    // Driver program to test above function 
 
   let nz = 5;
   printSquares(nz);

/*

6.Write a program that reads in two numbers (from standard input) and then writes out the value of the smaller ones.*/






/*7.Write a program that reads in three different numbers and then writes out the value of the smallest one.*/







/*

8.Write a program that reads in one natural number and then writes out a message telling whether the given number has exactly two digits.
Let us play with corporate taxes. Write a program that reads in two numbers: the annual income and annual expenses of a company,
 expressed in dollars. The program has to write out the amount of tax that the company has to pay; let us call it the profit tax. 
 If the expenses are greater than the income, then the profit tax equals 0 dollars. Otherwise, 
 let the profit tax be equal to 20% of the profits, where profits equal the difference of income and expenses.*/








/*
9.Write a program that reads in a number n. Then it should write out the first power of number 10 that is greater than number n. The powers of number 10 are 1, 10, 100, 1000, 10000, and so on.
N = 50, a = 
for(i = 1; i < power.length; i++){
If (p10 > n){
Return n}
}*/




/*
10.Write a program that reads in a number n. Then it should write out all the powers of number 10 that are smaller than the number n.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

11.Write a function named Sub which takes two arguments of type double, and returns the result of subtracting the second one from the first one. Use this function to calculate 3.2 – 8 and write out the result. The result should be -4.8.*/


var Sub = 3.2 - 8;

console.log(Sub);


/*Write a JavaScript program to get a list of elements that exist in both arrays.*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];

var drinks = ["Apple", "coke", "fanta", "Orange"]





/*
14. Write a JavaScript program to remove specified elements from the left of a given array of elements.*/


var ourArray = ["kenny", "A", ["girl"]];

var removedFromOurArray = ourArray.shift();

console.log(removedFromOurArray);
/*
15. Write a JavaScript program to filter out the element(s) of a given array, that has one of the specified values.*/

var array = ["Apple", "Banana", "Orange" ];

let result = array.filter(array => array.length > 5);

console.log(result);

/*
16. Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.
*/
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt);
var x
console.log(x);

/*17. Write a JavaScript program to get a random number in the specified range.*/

function r() {
  return Math.floor(Math.random() * 255);
}

console.log(r());

/*

18.  Write a JavaScript program to round a number to a specified amount of digits. */
  var num = 5.56789;
  var l = num.toFixed();

console.log(l);


/*19. Write a JavaScript program to capitalize the first letter of every word in a string*/

// const Weather= "rain";
// const upper = Weather.toUpperCase();

// console.log(upper);


// var publication = "heavy";
// var capitalise = publication[0].toUpperCase();
// console.log(capitalise);


/*
20.  Write a JavaScript program to get all the elements of an array except the last one. */
 
// var middlePoints = ['start', 'A', 'B', 'C', 'end'];
// var origin = middlePoints.shift();

// var destination = middlePoints.pop();

// console.log (destination)*/