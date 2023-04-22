// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// $$$$$$$$$$$$$$$$$                                                                               $$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$                               Practice Problem 1                              $$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$                                                                              $$$$$$$$$$$$$$$$$
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//  Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return.
//
//
//
//
//

function return_money(money, applePrice, orangePrice) {
  let total_cost = applePrice + orangePrice;
  let money_return = money - total_cost;
  return money_return;
}

let tkPabo = return_money(2000, 800, 500);
console.log("Mama Total back pabo : ", tkPabo, "Tk");

//
//
//
//
//
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// $$$$$$$$$$$$$$$$$                                                                               $$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$                               Practice Problem 2                              $$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$                                                                              $$$$$$$$$$$$$$$$$
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// var mathematics = 100;
// var biology = 94;
// var chemistry = 96;
// var physics = 91;
// var bangla = 83;
// var total_Number = mathematics + biology + chemistry + physics + bangla;
// console.log(total_Number);

// var averageNumber = total_Number / 5;

// console.log(averageNumber);

//
//
//
//
//

function scores(mathematics, biology, chemistry, physics, bangla) {
  let total_Number = mathematics + biology + chemistry + physics + bangla;
  let averageNumber = total_Number / 5;
  return averageNumber;
}

let averageNumber = scores(100, 94, 96, 91, 83);
console.log("Average Number of Total score is : ", averageNumber);

//
//
//
//
//

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// $$$$$$$$$$$$$$$$$                                                                               $$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$                               Practice Problem 3                              $$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$                                                                              $$$$$$$$$$$$$$$$$
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to combine these two strings and print them in one line. Help John write the program.

// var firstLine = "I am going to be";
// var secondLine = "an awesome web developer";
// var fullSentence = firstLine + " " + secondLine;
// console.log(fullSentence);
//
//
//
//
//
function complete_sentence(line1, line2) {
  let fullSentence = line1 + " " + line2;
  return fullSentence;
}
var firstLine = "I am going to be";
var secondLine = "an awesome web developer.";

let Sentence = complete_sentence(firstLine, secondLine);
console.log("Full Sentence is : ", Sentence);
//
//
//
//
//
// Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what's the remainder would be if she divided the number by 5. Help Sarah write the program.

function number(num1) {
  let x = num1 % 5;
  return x;
}

let x = 79;
let remainder = number(x);
console.log("The Remainder is : ", remainder);

//
//
//
//
//



function numbers(num1, num2) {

return Math.max(num1, num2);

}
let a = 54;
let b = 59;

let differenceInNumber = numbers(a, b);
console.log("The bigger number is : " , differenceInNumber);
