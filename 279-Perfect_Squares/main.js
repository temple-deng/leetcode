/**
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。
 * 你需要让组成和的完全平方数的个数最少。
 * 自底向上的动态规划方案
 * 这里的陷阱是在 s[0] 处，出现了 s[0] 说明当前这个数就是一个平方数
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let s = Array(n+1);
  s[0] = 0;
  s[1] = 1;

  for (let i = 2; i <= n; i++) {
    let min = +Infinity;
    for (let j = 1; j*j <= i; j++) {
      if (1 + s[i - j*j] < min) {
        min = 1 + s[i- j*j];
      }
    }
    s[i] = min;
  }

  return s[n];
};

console.log(numSquares(12));