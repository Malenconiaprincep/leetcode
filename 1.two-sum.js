/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result
    for(let i=0; i < nums.length; i++) {
      let index = nums.indexOf(target - nums[i])
      if (index !== -1 && index !== i) {
        result = [i, index]
        break
      }
    }
    return result
};

