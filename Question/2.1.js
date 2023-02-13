let a = [1, 1, 2, 3, 2];
const LinkedList = require("./util/LinkedListX");

// function Removedup(list) {
//   const obj = {};

//   let cur = list.head;
//   obj[cur.value] = true;

//   while (cur.next) {
//     if (obj[cur.next.value]) {
//       cur.next = cur.next.next;
//     } else {
//       obj[cur.next.value] = true;
//       cur = cur.next;
//     }
//   }

//   return list;
// }

function Removedup(list) {
  let cur = list.head;

  while (cur) {
    let runner = cur;
    while (runner.next) {
      if (runner.next.value === cur.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    cur = cur.next;
  }
  return list;
}

let list = new LinkedList();

for (let i = 0; i < a.length; i++) {
  list.append(a[i]);
}

console.log(JSON.stringify(Removedup(list)));
