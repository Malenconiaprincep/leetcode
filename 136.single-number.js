/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result
    let data = {}
    nums.forEach(value => {
      data[value] = ++data[value] || 1
    })

    Object.entries(data).map(item => {
      if (item[1] === 1) {
        result = item[0]
      }
    })

    return parseInt(result, 10)
};
// @lc code=end


