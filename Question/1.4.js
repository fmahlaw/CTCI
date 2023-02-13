function Palindrome(str) {
  let bitVector = 0;

  for (let i = 0; i < str.length; i++) {
    let index = str[i].charCodeAt() - 97;
    if (index < 0) return bitVector;
    let bitRepresentation = 1 << index;

    if ((bitVector & bitRepresentation) == 0) {
      bitVector |= bitRepresentation;
    } else {
      bitVector &= ~bitRepresentation;
    }
  }
  console.log(bitVector);
  if ((bitVector & (bitVector - 1)) === 0) return true;

  return false;
}

console.log(Palindrome("aca"));

// function Palindrome(str) {
//   const obj = {};
//   let odd = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") continue;
//     if (obj[str[i]] % 2 === 1) {
//       obj[str[i]] += 1;
//       odd--;
//     } else if (obj[str[i]] % 2 === 0) {
//       obj[str[i]] += 1;
//       odd++;
//     } else {
//       obj[str[i]] = 1;
//       odd++;
//     }
//   }

//   if (odd > 1) return "not";

//   return "it is";

// }

// console.log(Palindrome("tacio oca"));

// function Palindrome(str) {
//   let obj = {};
//   let flag = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") continue;
//     obj[str[i]] ? (obj[str[i]] += 1) : (obj[str[i]] = 1);
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") continue;
//     if (flag > 1) return "not";
//     if (obj[str[i]] % 2 === 1) flag++;
//   }
//   console.log([obj]);
//   return "it is";
// }

// console.log(Palindrome("tact oaca"));
