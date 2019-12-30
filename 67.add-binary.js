/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const sum = parseInt(a) + parseInt(b)
    let str = ''
    let carry = 0

    for(let i=0; i < sum.toString().split('').reverse() ; i++) {
      if (sum[i] === '2') {
        carry += 1
        str += '0'
      } else {
        if (sum[i] === '1' && carry === 1) {
          str += '0'
          carry = 0
        } else if(carry === 1) {
          str += '1'
          carry = 0
        } else {
          str += sum[i]
        }
      }
    }

    return str.split('').reverse().join('')
};
// @lc code=end

