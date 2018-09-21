/**
 * 自底向上方案
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length;
  let res = Array(n+1);
  res[0] = 0;
  if (n == 0) {
    return 0;
  }

  res[1] = nums[0];

  for (let i = 2; i <= n; i++) {
    res[i] = Math.max(res[i-2] + nums[i-1], res[i-1]);
  }

  return res[n];
};

console.log(rob([2, 7, 9, 3, 1]));