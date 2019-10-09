/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0
    const mapKey = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    const mapValue = [1, 5, 10, 50, 100, 500, 1000]
    let i = 0
    while(s.length !== i) {
      if (i + 1 <= s.length) {
        if (mapKey.indexOf(s[i]) >= mapKey.indexOf(s[i + 1])) {
          sum += mapValue[mapKey.indexOf(s[i])]
        } else {
          sum -= mapValue[mapKey.indexOf(s[i])]
        }
      }
      i++
    }
    return sum
};
// @lc code=end