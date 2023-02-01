// 	/* Assumes only letters a through z. */
//   function isUniqueChars (str) {

//     var checker = 0; // 32 or 64 bit integer variable 

//     for (var i = 0; i< str.length; i++) {
//         var index = str[i].charCodeAt(0) - 96;
//         var bitRepresentationOfIndex = 1 << index;

//         if ( (checker & bitRepresentationOfIndex) > 1) {
//             console.log(str, false);
//             return false;
//         } else {
//             checker = (checker | bitRepresentationOfIndex);
//         }
//     }
//     console.log(str, true);
//     return true;
// }

// isUniqueChars("helloc")




function isUniqueChars(str) {
  if (str.length > 128) return false;

  let char_set = [];
  for (let i = 0; i < str.length; i++) {
    let val = str.charAt(i);
    if (char_set[val]) {
      return false;
    }
    char_set[val] = true;
  }
  console.log(char_set)
  return true;
}
console.log(isUniqueChars("abcde"))
//big O (n2) in time complexity, and big O (1) in space complexity

// function IsUnique(word) {
//   for (let i = 0; i < word.length; i++) {
//     for (let j = 0; j < word.length; j++) {
//       if (i === j) continue;

//       if (word[i] === word[j]) {
//         console.log("false");
//         return;
//       }
//       console.log([i, j]);
//     }
//   }
// }

// IsUnique("hellow");
