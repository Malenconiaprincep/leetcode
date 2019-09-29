/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num
    if ( x < 0) {
      num = parseInt(Math.abs(x).toString().split('').reverse().join(''), 10) * -1
    } else {
      num = parseInt(x.toString().split('').reverse().join(''), 10)
    }
    if (num < -Math.pow(2, 31) || num > Math.pow(2, 31) -1) {
      num = 0
    }
    return num
};

