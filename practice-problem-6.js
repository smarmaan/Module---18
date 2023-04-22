// var a = 9;
// var b = 8;
// var c = 9;

// if (a == b || b == c || a == c) {
//   console.log("This is a Isosceles Triangle");
// }
// else{
//     console.log("This is not a Isosceles Triangle")
// }

function sides(side1, side2, side3) {
  if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "This is a Isosceles Triangle";
  } else {
    return "This is not a Isosceles Triangle";
  }
}

let a=10;
let b=9;
let c=9;

let TriangleSides=sides(a, b, c);
console.log(TriangleSides);