// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ["Apple", "Banana", "Orange"];

// Find the index of ‘Banana’

console.log(fruits.indexOf("Banana"));

// ================= replace ‘Banana’ with ‘Mango’.=============

console.log(fruits);
fruits[1] = "Mango";
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push("Watermelon");
console.log(fruits);