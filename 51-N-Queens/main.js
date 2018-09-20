/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let col = Array(n);
  let dia1 = Array(2 * n - 1);
  let dia2 = Array(2 * n - 1);
  let result = [];

  nQueens(n, 0, []);

  return result;

  // 在第 index 行求解 n 皇后问题的一个摆放位置
  function nQueens(n, index, row) {
    if (n === index) {
      result.push(generateBoard(row));
      return;
    }

    for (let i = 0; i < n; i++) {
      // 首先第 i 列不能被占据，其次两个对角线不能被占据
      // 左上到右下的对角线为 index - i + (n - 1)
      // 右上到左下的对角线为 index + i
      if (!col[i] && !dia1[index+i] && !dia2[index-i+n-1]) {
        row.push(i);
        col[i] = true;
        dia1[index+i] = true;
        dia2[index-i+n-1] = true;
        nQueens(n, index+1, row);
        row.pop();
        col[i] = false;
        dia1[index+i] = false;
        dia2[index-i+n-1] = false;
      }
    }
  }
};


function generateBoard(row) {
  let res = [];

  for (let i = 0; i < row.length; i++) {
    res[i] = '';
    for (let j = 0; j < row.length; j++) {
      if (j == row[i]) {
        res[i] += 'Q';
      } else {
        res[i] += '.';
      }
    }
  }

  return res;
}

console.log(solveNQueens(4));
// solveNQueens(4);