/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
      return false
    } else {
      let a = x.toString().split('')
      let b = x.toString().split('').reverse()

      return a.join('') === b.join('')
    }
};

