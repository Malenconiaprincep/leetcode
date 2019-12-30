/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// 本题思路 先补齐位数 然后根据 进位机制来判断

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const length = Math.max(a.length, b.length)
  let str1 = Array(length - a.length).fill(0).join('') + a
  let str2 = Array(length - b.length).fill(0).join('') + b
  let str = ''
  let carry = 0
  var i = length - 1
  while (i >= 0) {
    var sum = Number(str1[i]) + Number(str2[i])
    if (sum === 2) {
      if (carry === 1) {
        str += '1'
      } else {
        str += '0'
      }
      carry = 1
    } else {
      if (sum === 1 && carry === 1) {
        str += '0'
        carry = 1
      } else if (carry === 1) {
        str += '1'
        carry = 0
      } else {
        str += sum.toString()
        carry = 0
      }
    }
    i--
  }


  if (carry === 1) {
    str += '1'
  }
  console.log(str)
  return str.split('').reverse().join('')
};
// @lc code=end

