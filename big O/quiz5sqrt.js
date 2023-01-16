function sqrt(n) {
  return sqrt_helper(n, 1, n);
}
let count = 0
function sqrt_helper(n, min, max) {
  if (max < min) return -1;
  let guess = (min + max) / 2;
 count++
  if (guess * guess === n) {
    return guess;
  } else if (guess * guess < n) {
    return sqrt_helper(n, guess + 1, max);
  } else {
    return sqrt_helper(n, min, guess - 1);
  }
}

console.log(sqrt(9))
console.log(count)