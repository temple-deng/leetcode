/**
 * 自底向上方案
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid.length === 0) {
    return 0;
  }

  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  let res = Array(m);

  for (let i = 0; i < m; i++) {
    res[i] = Array(n);
  }

  let i = 0;
  for (; i < m; i++) {
    // 边缘上有一块障碍，则后面即不可达
    if (obstacleGrid[i][0]) {
      while(i < m) {
        res[i][0] = -1;
        i++
      }
    } else {
      res[i][0] = 1;
    }
  }

  i = 0;
  for (; i < n; i++) {
    if (obstacleGrid[0][i]) {
      while(i < n) {
        res[0][i] = -1;
        i++;
      }
    } else {
      res[0][i] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j]) {
        res[i][j] = -1;
      } else {
        // 找到一个可以开始的点
        if (res[i-1][j] == -1 && res[i][j-1] != -1) {
          res[i][j] = res[i][j-1];
        } else if (res[i-1][j] != -1 && res[i][j-1] == -1) {
          res[i][j] = res[i-1][j];
        } else if (res[i-1][j] == -1 && res[i][j-1] == -1) {
          res[i][j] = -1;
        } else {
          res[i][j] = res[i-1][j] + res[i][j-1];
        }
      }
    }
  }
  return res[m-1][n-1] === -1 ? 0 : res[m-1][n-1];
};


var arr = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];

console.log(uniquePathsWithObstacles(arr));