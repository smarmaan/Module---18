// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.

let scores = {
  you: 85,
  Tom: 66,
  Jane: 95,
  Peter: 56,
  John: 40,
};

scores.John = 78;
console.log(scores.John);
console.log(scores);





















// let grades = {};

// for (let student in scores) {
//   let score = scores[student];

//   if (score >= 80) {
//     grades[student] = "A";
//   } else if (score >= 60) {
//     grades[student] = "B";
//   } else if (score >= 50) {
//     grades[student] = "C";
//   } else if (score >= 40) {
//     grades[student] = "D";
//   } else {
//     grades[student] = "F";
//   }
// }

// console.log(grades);
