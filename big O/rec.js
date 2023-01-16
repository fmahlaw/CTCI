let count = 0;

function f(n) {
  if (n === 0) return 0;
  count++;
  return f(n - 1) + f(n-1);
}

f(5);
console.log(count);
