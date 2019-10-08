/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 如果存在 0 的情况
  var arr = nums.sort((x, y) => x - y)

  let left = 0
  let right = arr.length > 0 ? arr.length - 1 : 0
  let newarr = []

  while (left < right) {
    const remain = arr[left] + arr[right]
    const indexes = arr.map((item, index) => {
      if (item === -remain) {
        return index
      }
    }).filter(item => !isNaN(item))

    // 无0
    if (indexes.length > 0 &&
      indexes.some(index => 
        index !== left && 
        index !== right
      ) 
    ) {
      if (arr[right] > -remain && arr[left] !== arr[left - 1]) {
        newarr.push(
          [arr[left], arr[right], -remain]
        )
      } else if(arr[right] === arr[left]) {
        if (newarr.length === 0) {
          newarr.push(
            [0,0,0]
          )
        }
      }
    }
    if (remain < 0) {
      left++
    } else {
      right--
    }
  }
  return newarr
};


