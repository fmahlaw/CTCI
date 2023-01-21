//s: hey
//b: hello
let s = "hey";
let b = "yelleo all";
let og = [0, 0, 0];
let cont = [0, 0, 0];

// Big O time  = S*S + B = S^2+ B, S is the string we're looking and B the is the magazine
//

for (let i = 0; i < s.length; i++) {
  for (let j = 0; j < s.length; j++) {
    if (s[i] === s[j]) {
      og[i] += 1;
    }
  }
}

for (let i = 0; i < b.length; i++) {
  if (!(b[i] === s[0] || s[1] || s[2])) {
    continue;
  }
  if (s[0] === b[i]) {
    cont[0] += 1;
    continue;
  }
  if (s[1] === b[i]) {
    cont[1] += 1;
    continue;
  }
  if (s[2] === b[i]) {
    cont[2] += 1;
    continue;
  }
}

console.log([og,cont])

if (og[0] <= cont[0] && og[1] <= cont[1] && og[2] <= cont[2]) {
  console.log("can be formed");
}
else{
  console.log("cannot be formed")
}
