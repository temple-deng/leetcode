/**
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成
 * 其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
 * 同一个单元格内的字母不允许被重复使用。
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let used = Array(board.length);

  for (let i = 0; i < board.length; i++) {
    used[i] = Array(board[i].length);
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        if (backtrack(0, i, j)) {
          return true;
        }
      }
    }
  }

  return false;

  function backtrack(index, i, j) {
    // 找到一个完整解
    if (index === word.length) {
      return true;
    }

    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) {
      return false;
    }

    if (board[i][j] === word[index] && !used[i][j]) {
      used[i][j] = true;
      if (backtrack(index+1, i-1, j) || backtrack(index+1, i, j+1) || backtrack(index+1, i+1, j) || backtrack(index+1, i, j-1)) {
        return true;
      }
      used[i][j] = false;
    }
    return false;
  }
};

var arr = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];

console.log(exist(arr, 'ABCCED'));