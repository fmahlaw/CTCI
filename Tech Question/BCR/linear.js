//linear search O (n)
// needs to be close to each other index number of searching value(b). for this problem max -2 or +2 different in index number in a loop
//messy code

let a = [13, 27, 35, 40, 49, 55, 59];
let b = [17, 40, 55, 56, 57, 59, 60];
let start = 0;

for (let i = 0; i < b.length; i++) {
  if (a[i] < b[start]) continue;
  if (a[i] === b[start]) {
    console.log([a[i], b[start]]);
    start += 1;
    continue;
  }
  if (a[i] > b[start]) {
    if (a[i] === b[start + 1]) {
      console.log([a[i], b[start + 1]]);
    }
    start += 1;
    if (a[i] > b[start]) {
      if (a[i] === b[start + 1]) {
        console.log([a[i], b[start + 1]]);
        start+=1
      }
      start+=1
    }
  }
}
