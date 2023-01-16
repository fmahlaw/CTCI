let k = 2,
  arr = [1, 7, 5, 9, 2, 12, 3];

//(1,3) , (3,5) , (5,7) , (7,9) = difference x+k
//(7,5), (5,3) , (9,7) , (3,1) = difference x-k
// 1, 2,  3, 5, 7, 9, 12  sorted

//bottleneck v1.2.1
// Big O time = N(mapping the array to hashmap) + N = 2N = N , N as array input
// Big O Space = O (1) ,

let obj = {
  1: 0,
  7: 1,
  5: 2,
  9: 3,
  2: 4,
  12: 5,
  3: 6,
};

let keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
  let result = parseInt(keys[i]) + k;

  if (obj[result]) {
    console.log([parseInt(keys[i]), result]);
  }
}

//bottleneck v1.2
// Big O time = N(mapping the array to hashmap) + N = 2N = N , N as array input
// Big O Space = O (1) ,

// let obj = {
//   0: 1,
//   1: 7,
//   2: 5,
//   3: 9,
//   4: 2,
//   5: 12,
//   6: 3,
// };

// let obj2 = {
//   1: 0,
//   7: 1,
//   5: 2,
//   9: 3,
//   2: 4,
//   12: 5,
//   3: 6,
// };
 
// let keys = Object.keys(obj);
// let values = Object.values(obj);

// let keys2 = Object.keys(obj2);
// let values2 = Object.values(obj2);

// for (let i = 0; i < keys.length; i++) {
//   let result = obj[`${i}`] + k;

//   if (obj2[result]) {
//     console.log([obj[`${i}`], result]);
//   }
// }

//bottleneck v1.1
// Big O time = N Log N (sorting) + N * Log N (BS) = 2 N Log N = N Log N , N as array input
// Big O Space = O (1) ,

// let sortedArr = arr.sort((a, b) => a - b);

// for (let i = 0; i < sortedArr.length; i++) {
//   let func = binarySearch(sortedArr, sortedArr[i] + k);
//   if (func !== false) {
//     console.log([sortedArr[i], sortedArr[func]]);
//   }
// }

// function binarySearch(a, x) {
//   let low = 0;
//   let high = a.length - 1;
//   let mid = 0;

//   while (low <= high) {
//     mid = (low + high) / 2;
//     if (a[mid] < x) {
//       low = mid + 1;
//     } else if (a[mid] > x) {
//       high = mid - 1;
//     } else {
//       return mid;
//     }
//   }
//   return false;
// }

//bottleneck v1.0
//big O time = n^2, n as array input
//space = 1

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] - arr[i] === k){
//       console.log([arr[i], arr[j]]);
//     }
//     if (arr[i] - k === arr[j]) {
//       console.log([arr[i], arr[j]]);
//     }
//   }
// }
