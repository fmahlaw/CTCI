let k = 10;
let obj = {};
let count = 0

// unnecessary V 1.0.3
// Big O Time = N^2 , Space  = O (n)
// unnecessary4();
console.log(obj)
function unnecessary4() {
  for (let c = 1; c < k; c++) {
    for (let d = 1; d < k; d++) {
      let result = Math.pow(c, 3) + Math.pow(d, 3);
      obj[result] =  c === d ? [[c,d]] : [[c, d], [d,c]];
    }
  }

  for (const result in obj) {
    for (const pair of obj[result]) {
      for (const pair2 of obj[result]) {
        count++
        console.log([pair[0],pair[1],pair2[0],pair2[1]])
      }
    }
    
  }
}
// unnecessary V 1.0.2
// Big O Time = N^2 , Space  = O (n)

// unnecessary3();

function unnecessary3() {
  for (let c = 1; c < k; c++) {
    for (let d = 1; d < k; d++) {
      let result = Math.pow(c, 3) + Math.pow(d, 3);
      obj[result] =  c === d ? [[c,d]] : [[c, d], [d,c]];
    }
  }

  for (let a = 1; a < k; a++) {
    for (let b = 1; b < k; b++) {
      let result = Math.pow(a, 3) + Math.pow(b, 3);
      let list = obj[result];

      for (const pair of list) {
        count++
        console.log([a,b,pair[0],pair[1]])
      }
    }
  }
}

// unnecessary V 1.0.1
// Big O Time = N^3 , Space  = O (1)
// We can break out of loop 3 when it has done on 2 value, because there is only 2 valid value on loop 3
// unnecessary2();
function unnecessary2() {
  for (let a = 1; a < k; a++) {
    for (let b = 1; b < k; b++) {
      for (let c = 1; c < k; c++) {
        let d = Math.round(
          Math.pow(Math.pow(a, 3) + Math.pow(b, 3) - Math.pow(c, 3), 1 / 3)
        );

        if (
          Math.pow(a, 3) + Math.pow(b, 3) ===
          Math.pow(c, 3) + Math.pow(d, 3)
        ) {
          count++
          console.log([a, b, c, d]);
        }
      }
    }
  }
}
// We can break out of loop 4 when it has done on 1 value, because there is only 1 valid value on loop 4
// unnecessary1()
console.log(count)
// unnecessary V 1.0
// Big O Time = N^4 , Space  = O (1)

function unnecessary1() {
  for (let a = 1; a < k; a++) {
    for (let b = 1; b < k; b++) {
      for (let c = 1; c < k; c++) {
        for (let d = 1; d < k; d++) {
          if (a * a * a + b * b * b === c * c * c + d * d * d) {
            count++
            console.log([a, b, c, d]);
            break;
          }
        }
      }
    }
  }
}
