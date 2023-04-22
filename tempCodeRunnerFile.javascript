function countZero(a) {
  let b,
    count = 0;
  while (a > 0) {
    b = a % 10;
    while (b == 0) {
      count++;
    }
    a = Math.floor(a / 10);
  }
  return count;
}

console.log("count number of zero :", countZero(120251000154012020001));
