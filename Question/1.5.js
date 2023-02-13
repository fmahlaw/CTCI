// let a = "pale";
// let b = "pale";

// let a = "pale";
// let b = "palee";
// let a = "plb";
// let b = "palb";

//big O(n) and space big o(1)
//need a rework
// function OneEdit(str1, str2) {
//   let temp = "";
//   let edit = 0;
//   let inputLength = str1.length - str2.length;
//   if (!(inputLength >= -1 && inputLength <= 1)) return false;
//   let longStr = "";
//   let shortstr = "";

//   if (str1.length > str2.length) {
//     longStr = str1;
//     shortstr = str2;
//   } else {
//     longStr = str2;
//     shortstr = str1;
//   }

//   for (let i = 0; i < longStr.length; i++) {
//     temp = longStr[i];
//     edit++;
//     if (shortstr[i] === undefined) continue;
//     if (shortstr[i] === temp) {
//       edit--;
//       continue;
//     } else if (shortstr[i + 1] === temp) {
//       edit--;
//       continue;
//     } else if (shortstr[i - 1] === temp) {
//       edit--;
//       continue;
//     }
//   }
//   console.log(edit);
//   if (edit === 1) return true;
//   return false;
// }

// console.log(OneEdit(a, b));

// let a = "papl";
// let b = "pal";

// have to be unique char
// the char always be in the adjacent if not exist
// function OneEdit(str1, str2) {
//   let obj = {};
//   let edit = 0;
//   let longestStr = str1.length > str2.length ? str1.length : str2.length;
//   let inputLength = str1.length - str2.length;

//   if (!(inputLength >= -1 && inputLength <= 1)) return false;

//   for (let i = 0; i < longestStr; i++) {
//     if (obj[str1[i]]) {
//       obj[str1[i]] += 1;
//       edit++;
//     } else if (!obj[str1[i]] && !(str1[i] === undefined)) {
//       obj[str1[i]] = 1;
//       edit++;
//     }
//     if (obj[str2[i]] && str2[i]=== str1[i] ) {
//       edit--;
//     } else if (!obj[str2[i]] && !(str2[i] === undefined)) {
//       edit++;
//     }
//   }
//   console.log([obj,edit])
//   if (edit === 0) return false;
//   if (edit >= -1 && edit <= 2) return true;
//   return false;
// }

// console.log(OneEdit(a, b));

// function OneEdit(str1, str2) {
//   let obj = {};
//   let edit = 0;
//   let inputLength = str1.length - str2.length;

//   if (!(inputLength >= -1 && inputLength <= 1)) return false;

//   for (let i = 0; i < str1.length; i++) {
//     if (!obj[str1[i]]) {
//       obj[str1[i]] = 1;
//       edit++;
//     }
//   }
//   for (let i = 0; i < str2.length; i++) {
//     console.log(edit);
//     if (obj[str2[i]]) {
//       edit--;
//     } else {
//       edit++;
//     }
//   }

//   console.log([obj, edit]);

//   if (edit === 0) return false;
//   if (edit >= -1 && edit <= 2) return true;
//   return false;
// }

// console.log(OneEdit(a, b));
