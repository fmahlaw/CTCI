let arr = [1, 2, 3, 4, 5, 1, 2, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i === j) continue;
    if (arr[i] === arr[j]) {
      console.log(arr[i], arr[j]);
    }
  }
}
