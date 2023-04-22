// var a = 13;
// var b = 75;
// var c = 45;

// if (a > b && b > c) {
//   console.log("13 is the largest number");
// } else if (c > a && a > b) {
//   console.log("45 is the largest Number");
// } else {
//   console.log("75 is the largest number");
// }

//
//
//
//
//
//

function numbers(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1 + " is the largest Number";
  } else if (num2 > num1 && num2 > num3) {
    return num2 + " is the largest Number";
  } else {
    return num3 + " is the largest Number";
  }
}

let a = 130;
let b = 60;
let c = 530;

let largestNum = numbers(a, b, c);
console.log(largestNum);
