let arr = [1, 7, 5, 9, 2, 12, 3];
let k = 2;

//(1,3) , (3,5) , (5,7) , (7,9)

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] + arr[i] === arr[i]+ k) {
      console.log(  [arr[i], arr[j]]);
    }
  }
}
