/*
 * @lc app=leetcode id=324 lang=javascript
 *
 * [324] Wiggle Sort II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    let temp = nums.sort((x, y) => x - y)
    var n = nums.length
    var mid = Math.floor(n / 2)
    for(let i=0; i < n; i++) {
      nums[i] = i & 1 ? temp[--n] : temp[--mid]
    }
    return nums
};
// @lc code=end