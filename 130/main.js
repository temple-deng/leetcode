/**
 * 超出内存限制了。。。。。也不知道对不对
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  var visited = Array(board.length);

  for (let i = 0; i < board.length; i++) {
    visited[i] = Array(board[i].length);
  }

  let invertList = [];


  for (let i = 1; i < board.length-1; i++) {
    for (let j = 1; j < board[i].length-1; j++) {
      if (board[i][j] == 'O') {
        if (dfs(i, j)) {
          for (let m = 0; m < invertList.length; m++) {
            let x = invertList[m][0];
            let y = invertList[m][1];
            board[x][y] = 'X';
          }
        }
        invertList = [];
      }
    }
  }

  function dfs(i, j) {
    if (i == 0 || i == board.length-1 || j == 0 || j == board[i].length-1) {
      if (board[i][j] == 'X') {
        return true;
      }
      return false;
    }

    if (board[i][j] == 'X') {
      return true;
    }

    if (!visited[i][j]) {
      visited[i][j] = true;
      if (!visited[i-1][j] && !dfs(i-1, j)) {
        visited[i][j] = false;
        return false;
      }

      if (!visited[i][j+1] && !dfs(i, j+1)) {
        visited[i][j] = false;
        return false;
      }

      if (!visited[i+1][j] && !dfs(i+1, j)) {
        visited[i][j] = false;
        return false;
      }

      if (!visited[i][j-1] && !dfs(i, j-1)) {
        visited[i][j] = false;
        return false;
      }
      invertList.push([i,j]);
      visited[i][j] = false;
      return true;
    }
  }
};

// var grid = [
//   ["O","O","O","O","X","X"],
//   ["O","O","O","O","O","O"],
//   ["O","X","O","X","O","O"],
//   ["O","X","O","O","X","O"],
//   ["O","X","O","X","O","O"],
//   ["O","X","O","O","O","O"]
// ];

var grid = [
  ["O","X","X","O","X"],
  ["X","O","O","X","O"],
  ["X","O","X","O","X"],
  ["O","X","O","O","O"],
  ["X","X","O","X","O"]
];
solve(grid)
console.log(grid);