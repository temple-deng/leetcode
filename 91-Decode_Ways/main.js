/**
 * 给定一个只包含数字的非空字符串，请计算解码方法的总数
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const n = s.length+1;
  let res = Array(n);
  res[0] = 1;
  
  for (let i = 1; i < n; i++) {
    let count = 0;
    let lastChar = s[i-1];
    if (isChar(lastChar)) {
      count += res[i-1];
    }
    if ((i-2) >= 0) {
      let lastTwoChar = s.slice(i-2, i);

      if (isChar(lastTwoChar)) {
        count += res[i-2];
      }
    }
    res[i] = count;
  }

  return res[n-1];
};

function isChar(char) {
  if (char[0] == '0') {
    return false;
  }
  let num = Number(char);
  if (num > 0 && num < 27) {
    return true;
  }
  return false;
}

console.log(numDecodings('226'))