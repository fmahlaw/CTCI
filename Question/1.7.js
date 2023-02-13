let matrixNxN = [
  [3, 4, 5, 6],
  [5, 6, 7, 9],
  [8, 9, 0, 1],
  [0, 1, 2, 8],
];

function RotateMatrix(matrix) {
  if (matrix.length == 0 || matrix.length != matrix[0].length) return false; // Not a square
  let n = matrix.length;

  for (let layer = 0; layer < n / 2; layer++) {
    let last = n - 1 - layer;
    for (let i = layer; i < last; i++) {
      let offset = i - layer;
      let top = matrix[layer][i]; // save top
      console.log([i,"layer " + layer, "last " + last, "offset "] + offset, "top " + top);
      // left -> top
      matrix[layer][i] = matrix[last - offset][layer];

      // bottom -> left
      matrix[last - offset][layer] = matrix[last][last - offset];

      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];

      // top -> right
      matrix[i][last] = top; // right <- saved top
    }
  }
  return matrix;
}

console.table(RotateMatrix(matrixNxN));
