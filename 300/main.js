/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const n = nums.length;
  if (n == 0) {
    return 0;
  }

  let res = Array(n);
  res[0] = 1;

  let max = 0;
  for (let i = 0; i < n; i++) {
    let temp = LIS(i, res, nums);
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

function LIS(i, res, nums) {
  if (res[i] != undefined) {
    return res[i];
  }

  let j = i-1;
  let max = -1;
  for (; j >= 0; j--) {
    if (nums[j] < nums[i]) {
      let temp = LIS(j, res, nums)
      if (temp > max) {
        max = temp;
      }
    }
  }

  max = max == -1 ? 1 : max + 1;
  return res[i] = max;
}

console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));