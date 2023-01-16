let count = 0;

function sum(n) {
  count++;
  if (n <= 0) return 0;

  return sum(n - 1)+ sum(n-1);
}

console.log([sum(3), count]);
