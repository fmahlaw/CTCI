let count = 0;

function permutation(str) {
  permutation2(str, "");
}

function permutation2(str, prefix) {
  
  if (str.length === 0) {
    return -1;
  } else {
    for (let i = 0; i < str.length; i++) {
      let rem = str.substring(0, i) + str.substring(i + 1);
      permutation2(rem, prefix + str.charAt(i));
      count++
      console.log(count)
    }
  }
}
console.log(permutation("abaa"));


// console.log("ferian".charAt(0))
// function div(a, b) {
//   count = 0;
//   sum = b;

//   while (sum <= a) {
//     sum += b;
//     count++;
//   }

//   return count;
// }

// console.log(div(20, 3));
// // function mod(a, b) {
// //   if (b <= 0) return -1;
// //   const div = a / b;
// //   return a - div * b;
// // }

// // console.log(mod(3,6))

// // function printArr(n) {
// //   for (let index = 0; index < n; index++) {
// //     for (let index2 = index + 1; index2 < n; index2++) {
// //       console.log(index + "," + index2)
// //     }
// //   }
// // }

// // printArr(5)
// //----------------------------------------------------

// // function f(n) {
// //   if (n < 1) {
// //     return 1;
// //   }
// //   console.log(n);
// //   return f(n - 1) + f(n - 1);
// // }

// // f(4);
