let k = 3;
let obj = {};


// unnecessary V 1.0.2
// Big O Time = N^2 , Space  = O (n)

unnecessary3();

function unnecessary3() {
  for (let c = 1; c < k; c++) {
    for (let d = 1; d < k; d++) {
      let result = Math.pow(c, 3) + Math.pow(d, 3);
      obj[result] = [c, d];
    }
  }

  for (let a = 1; a < k; a++) {
    for (let b = 1; b < k; b++) {
      let result = Math.pow(a, 3) + Math.pow(b, 3);
      let list = obj[result];

      console.log([a, b, list[0], list[1]]);
    }
  }
}

// unnecessary V 1.0.1
// Big O Time = N^3 , Space  = O (1)
// unnecessary2();
function unnecessary2() {
  for (let a = 1; a < k; a++) {
    for (let b = 1; b < k; b++) {
      for (let c = 1; c < k; c++) {
        let d = Math.round(
          Math.pow(Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3), 1 / 3)
        );

        if (
          Math.pow(a, 3) + Math.pow(b, 3) ===
          Math.pow(c, 3) + Math.pow(d, 3)
        ) {
          console.log([a, b, c, d]);
        }
      }
    }
  }
}
// unnecessary1()
// unnecessary V 1.0
// Big O Time = N^4 , Space  = O (1)
function unnecessary1() {
  for (let a = 1; a < k; a++) {
    for (let b = 1; b < k; b++) {
      for (let c = 1; c < k; c++) {
        for (let d = 1; d < k; d++) {
          if (a * a * a + b * b * b === c * c * c + d * d * d) {
            console.log([a, b, c, d]);
            break;
          }
        }
      }
    }
  }
}
