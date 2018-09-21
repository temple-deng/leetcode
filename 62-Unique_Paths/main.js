/**
 * 自底向上的方案
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let f = Array(n);

  for (let i = 0; i < n; i++) {
    f[i] = Array(m);
  }

  for (let i = 0; i < n; i++) {
    f[i][0] = 1;
  }

  for (let i = 0; i < m; i++) {
    f[0][i] = 1;
  }


  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      f[i][j] = f[i-1][j] + f[i][j-1];
    }
  }

  return f[n-1][m-1];
};

console.log(uniquePaths(7,3));