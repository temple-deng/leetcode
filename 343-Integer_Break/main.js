/**
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。
 * 返回你可以获得的最大乘积。
 * 这里分析一下这道题，以 n = 5 为例
 * 我们可以首先把 5 分拆成 1 和 ?, 2 和 ?, 3 和 ?, 4 和 ?
 * ? 是因为我们不确定拆分后的数要不要再拆分
 * 这里也是一个陷阱
 * s[2] = 1, s[3] = 2, 但是 2 * s[3] 和 3 * s[2] 都是比 2*3 和 3*2 小的
 * 所以这里有必要比较一下拆分后的另一个数直接相乘与继续拆分后的数相乘的积相乘哪个更大
 * 
 * 这里是一个传统的自底向上的动态规划方案，Go 版本是一个自顶向下的递归方案
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let s = Array(n+1);
  s[0] = 0;
  s[1] = 1;
  s[2] = 1;

  for (let i = 3; i <= n; i++) {
    let max = -1;
    for (let j = 1; j < i; j++) {
      let m = j * (i-j);
      if (j * s[i-j] > m) {
        m = j * s[i-j];
      }
      max = Math.max(max, m);
    }
    s[i] = max;
  }

  return s[n];
};

console.log(integerBreak(10));