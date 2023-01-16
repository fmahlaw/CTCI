let count = 0;

function allFib(n) {
  for (i = 0; i < n; i++) {
    fib(i);
  }
}

function fib(n) {
  count++;
  if (n <= 0) return 0;
  else if (n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

let z = 5
allFib(z);
console.log(count);
console.log(Math.pow(1.8,z))

