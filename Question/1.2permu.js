let a = "aba";
let b = "baa";

// function sortPermu(a, b) {
//   if (a.length !== b.length) return false;
//   if (a === "" || b === "") return false;
//   var sortedStringOne = a.split("").sort().join("");
//   var sortedStringTwo = b.split("").sort().join("");
//   return sortedStringOne === sortedStringTwo;
// }
// console.log(sortPermu(a, b));

// big O(2n) = O(n) time complexity and O(n) space complexity
function isPermu(a, b) {
  let obj = {};
  if (a.length + b.length === 0 || a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    obj[a[i]] ? obj[a[i]] += 1:obj[a[i]] = 1 ;
  }

  console.log(obj)

  for (let i = 0; i < b.length; i++) {
    if (!obj[b[i]]) return false;
    obj[b[i]]--;
    if (b[i] < 0) return false;
  }
  return true;
}

console.log(isPermu(a, b));

// let a = "cabde";
// let b = "cba";
// let checker = 0;
// let start = 1
// console.log(IsPermutation(a,b))

// function IsPermutation(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (checker === b.length) return false;
//       if (!(a[i] === b[j])) checker++;

//       if(a[i]===b[j]){
//         if(a[i+1] === b[j+1]){}
//         if(a[i+1] === b[j+2]){}
//       }
//       console.log([i,j,checker])
//     }
//   }
// }

// // let a = "cabde";
// // let b = "cba";
// // start = 1
// function recursiveForward(i,j) {

//     if(a[i+1] === b[j+1]){}
//     else {
//       start++
//       recursiveForward(i,j)
//     }

// }

// function recursivebackward() {}

// function IsPermutation(a, b) {
//   let c = 0;

//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (!a[i] === a[j]) {
//         c++
//       }
//       if(c === b.length) return
//     }
//   }

// }

// console.log(IsPermutation("abc","bcd"))
