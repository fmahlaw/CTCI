let count = 0;

function powers0f2(n) {
  count++;
  if (n < 1) {
    console.log(0);
    return 0;
  } else if (n === 1) {
    console.log(1);
    return 1;
  } else {
    let prev = powers0f2(n / 2);
    let curr = prev * 2;
    console.log(curr);
    return curr;
  }
}

powers0f2(8);
console.log("function access " + count);
