//Example: Given a smaller string S and a bigger string B, design an algorithm to find
//all permutatons of the shorter string within the longer one. print the location of each permutation
//let b = "cbabadcbbabbcbabaabccbabc"
// variation: eksklusif elemen, no sharing location 
// use Continue to remove duplicate locaton
let s = "abb";
let b = "cbabadcbbabbcbabaabccbabc";

for (let i = 0; i < b.length; i++) {
  if (s[0] === b[i]) {
    if (s[1] === b[i + 1]) {
      if (s[2] === b[i + 2]) {
        console.log(["ok", i, i + 2]);
      }
    }
    if (s[2] === b[i + 1]) {
      if (s[1] === b[i + 2]) {
        console.log(["ok", i, i + 2]);
      }
    }
  }
  if (s[1] === b[i]) {
    if (s[0] === b[i + 1]) {
      if (s[2] === b[i + 2]) {
        console.log(["ok", i, i + 2]);
        
      }
    }
    if (s[2] === b[i + 1]) {
      if (s[0] === b[i + 2]) {
        console.log(["ok", i, i + 2]);
      }
    }
  }
  if (s[2] === b[i]) {
    if (s[0] === b[i + 1]) {
      if (s[1] === b[i + 2]) {
        console.log(["ok", i, i + 2]);
      }
    }
    if (s[1] === b[i + 1]) {
      if (s[0] === b[i + 2]) {
        console.log(["ok", i, i + 2]);
      }
    }
}
}
