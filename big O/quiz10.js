let count = 0;

function sumDigits(n) {
  let sum = 0;

  while (n > 1) {
    count++
    sum += n % 10;
    n /= 10;
  }

  return sum;
}

console.log(sumDigits(1430));
console.log(count)


