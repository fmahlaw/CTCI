// let a = [13, 27, 35, 40, 49, 55, 59];
// let b = [0, 52, 55, 56, 57, 58, 59];
let a = [0, 4,7,20,30, 50];
let b = [
  ,0 ,1, ,,,,,,,,,,,,, 2, 4, 5,7, 20,23, 24, 26,27, 28, 29, 30, 33, 35, 40, 45, 48,
  50]
// let a = [1,2];
// let b = [ 0,1,,,,,,,,2];
let start = 0;

//obselete Todo: fix if array has empty value
//recursive linear search  time complexitu big O(n*p) with p as position value B relative to element A
//space complexity big O(p),recursive space it needs to find the value

for (let i = 0; i < a.length; i++) {
  if (a[i] === undefined) continue;
  if (b[start] === undefined) {
    recursiveUndefined();
  }
  if (a[i] < b[start]) continue;
  if (a[i] === b[start]) {
    console.log([a[i], b[start]]);
    start += 1;
    continue;
  }

  if (a[i] > b[start]) {
    LSR(i);
  }
}
function recursiveUndefined() {
  if (b[start] || b[start] === 0) return
  
  else{
    start+=1
    recursiveUndefined()
  }
  


}

function LSR(i) {
  start += 1;
  if (b[start] === undefined) {
   recursiveUndefined()
  }
  if (a[i] < b[start]) return;
  if (a[i] === b[start]) {
    console.log([a[i], b[start]]);
    return;
  }
  if (a[i] > b[start]) {
    LSR(i);
  }
}

//linear search O (n)
// needs to be close to each other index number of searching value(b). for this problem max -2 or +2 different in index number in a loop
//messy code

// for (let i = 0; i < b.length; i++) {
//   if (a[i] < b[start]) continue;
//   if (a[i] === b[start]) {
//     console.log([a[i], b[start]]);
//     start += 1;
//     continue;
//   }
//   if (a[i] > b[start]) {
//     if (a[i] === b[start + 1]) {
//       console.log([a[i], b[start + 1]]);
//     }
//     start += 1;
//     if (a[i] > b[start]) {
//       if (a[i] === b[start + 1]) {
//         console.log([a[i], b[start + 1]]);
//         start+=1
//       }
//       start+=1
//     }
//   }
// }
