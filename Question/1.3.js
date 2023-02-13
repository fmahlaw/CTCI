// //Method to converted space into "%20", remove space in front and in the back of the input
// //Big O time is 2n= n, space Big o(1)
// can be optimize to be pure O n with code from urlify-3.js

// function urlfy(str, trueLength) {
//   let firstChar = 0;
//   let space = 0;
//   for (let i = str.length; i >= 0; i--) {
//     if (str[i] === " ") space++;
//     else firstChar = i;
//   }
//   const backspace = str.length - trueLength - firstChar;
//   const midspace = space - firstChar - backspace;
//   let pointer = trueLength + midspace * 2;
//   const container = pointer;
//   const lastChar = firstChar + trueLength - 1;
//  // console.log([backspace, midspace, firstChar, lastChar]);
//   let pointerBawah = 0;
//   for (let i = lastChar; i > firstChar; i--) {
//     if (pointerBawah === 0) {
//       str[pointerBawah] = str[firstChar];
//       pointerBawah++;
//     }
//     if (str[i] === " ") {
//       str[pointer - 1] = "0";
//       str[pointer - 2] = "2";
//       str[pointer - 3] = "%";
//       pointer -= 3;
//     } else {
//       str[pointer - 1] = str[i];
//       pointer--;
//     }
//   }

//   return str.slice(0, container);
// }

console.log(urlfy([" ", " ", "f", " ", "e", " ", " r", " ", " "," "], 5));

//this code to converts space BETWEEN string ( no frontspace) and removing backspace
//params : char string or string in an array, return: string with its converted space
// Big o: time = 2n = n , space = O(1)

// function urlfy(str, trueLength) {
//   let midSpace = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " " && i < trueLength) midSpace++;
//   }

//   let newLength = trueLength + midSpace * 2;
//   let container = newLength

//   for (let i = trueLength - 1; i >= 0; i--) {
//     if (str[i] === " ") {
//       str[newLength - 1] = "0";
//       str[newLength - 2] = "2";
//       str[newLength - 3] = "%";

//       newLength -= 3;
//     } else {
//       str[newLength - 1] = str[i];
//       newLength--;
//     }
//   }

//   return str.slice(0,container ).join("");
// }

// console.log(urlfy(["f"," ", "e"," ", ," ", ," ", ," ", ," " ],3));

// function urlfy(str, trueLength) {
//   let space = 0;
//   let firstChar = 0;
//   let flag = false;

//   for (let i = str.length; i >= 0; i--) {
//     if (str[i] === " ") space++;
//     else firstChar = i;
//   }
//   let backspace = str.length - trueLength - firstChar;
//   let midspace = space - firstChar - backspace;
//   let pointer = trueLength + midspace * 2;
//   let lastChar = firstChar + trueLength - 1;

//   for (
//     let pointerAtas = pointer - 1, pointerBawah = 0;
//     pointerAtas >= 0, pointerBawah < pointerAtas;
//     pointerAtas--, pointerBawah++
//   ) {
//     if (str[pointerBawah] === " " && pointerBawah > firstChar) {

//         str[pointerBawah-1] = "%"
//         str[pointerBawah] = "2"
//         str[pointerBawah+1] = "0"
//     } else {
//       str[pointerBawah] = str[firstChar + pointerBawah];
//       str[pointerAtas] = str[lastChar-- ];
//     }

//     console.log([pointerAtas, pointerBawah]);
//   }

//   console.log(str);
//   //   console.log([midspace, space, firstChar, backspace, pointer]);
// }

// console.log(urlfy([" ", "f", "e", " ", " ", "r", "i", " "], 6));
// console.log(urlfy([" ", "f", "e", " ", "r", "i", " "], 5));

// for (let i = 0, j = str.length - 1; i < str.length, j >= 0; i++, j--) {
//     if (str[i] !== " ") {
//       lastChar = i;
//     }
//     if (str[j] !== " ") {
//       firstChar = j;
//     }

// function urlfy(str, trueLength) {

//     let firstChar = 0
//     let space = 0
//     for (let i = str.length; i >= 0; i--) {
//         if(str[i]===" ") space++
//         else firstChar = i
//     }
//     let backspace = str.length - trueLength - firstChar
//     let midspace = space - firstChar - backspace
//     let pointer = trueLength + midspace*2

//     for (let i = pointer-1, j= 0; i >= 0 , j < i; i--, j++) {
//         if(str[i] === " " &&  i > trueLength ) continue
//         if(str[i] === " " &&  i < trueLength ){
//             // how to move "f" "e" to the top

//         }
//         else{
//             str[pointer] = str[i]
//             pointer--
//             console.log([pointer,str[i], i])
//         }

//     }
//     return str
// }

// function urlfy(str, trueLength) {
//   let firstChar = 0;
//   let lastChar = 0;
//   let space = 0;

//   for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
//     if (!(str[i] == " ")) lastChar = i + 1;
//     if (str[i] === " ") space++;
//     if (!(str[j] == " ")) firstChar = j;
//   }
//   let pointer = lastChar + space * 2;
//   for (let i = lastChar - 1; i >= firstChar; i--) {
//     if (str[i] === " ") {
//       str[pointer - 1] = "0";
//       str[pointer - 2] = "2";
//       str[pointer - 3] = "%";
//       pointer -= 3;
//     }
//     // obs, if not using else, there will be space between
//     else {
//       str[pointer - 1] = str[i];
//       pointer--;
//     }
//   }
//   return str;
// }

// console.log(urlfy(["f"," "," i", " ", "r", " ", " ", " "]))

// function urlify(str, len) {
//   let s = "";
//   let totalSpaces = str.length - len;
//   let frontSpaces = 0;
//   let flag = false;
//   console.log([s, totalSpaces, frontSpaces])
//   for (let i = 0; i < str.length; i++) {
//     if (flag === false) {
//       if (str[i] === " ") frontSpaces++;
//       else flag = true;
//     }
//     if (flag === true && i < str.length - (totalSpaces - frontSpaces)) {
//       if (str[i] === " ") s += "%20";
//       else s += str[i];
//     }
//     console.log([flag, str[i]], i, totalSpaces, frontSpaces)
//   }

//   return s;
// }

// console.log(urlify("  Mr  Jon   ", 7));

// function urlfy(str) {
//   let b = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") b += "%20";
//     else b += str[i];
//   }

//   return b;
// }

// console.log(urlfy(" a  b c ", 3))
