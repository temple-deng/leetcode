/**
 * 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围
 * 并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let island = Array(grid.length);
  
  for (let i = 0; i < grid.length; i++) {
    island[i] = Array(grid[i].length);
  }

  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1' && !island[i][j]) {
        count++;
        flagIsland(i,j);
      }
    }
  }

  return count;

  function flagIsland(x, y) {
    if ( x < 0 || x >= grid.length || y < 0 || y >= grid[x].length) {
      return;
    }

    if (grid[x][y] === '1' && !island[x][y]) {
      island[x][y] = true;
      flagIsland(x-1, y);
      flagIsland(x, y+1);
      flagIsland(x+1, y);
      flagIsland(x, y-1);
    }
    return;
  }
};

var arr = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
];

console.log(numIslands(arr));