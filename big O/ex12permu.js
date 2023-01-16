let count = 0;
// function permutation(str) {
//   permutation2(str, "");
// }

function permutation2(str, prefix) {
  count++;
  if (str.length == 0) {
    console.log(prefix);
  } else {
    for (let i = 0; i < str.length; i++) {
      let rem = str.substring(0, i) + str.substring(i + 1);
      console.log([rem, prefix, str.charAt(i)])
      permutation2(rem, prefix + str.charAt(i));
    }
  }
}
let string = "ab"; 
permutation2(string,"");
console.log(count);


// let a = string.length;
// console.log(Math.pow(a, 2) * factorial(a));

function factorial(n) {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
