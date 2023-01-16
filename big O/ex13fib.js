let count = 0;
function fib(n) {
  count++;
  if (n <= 0) return 0;
  else if (n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

fib(40);
console.log(count);
