/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let i = 0;
   let j = height.length - 1
   let sum = 0
   while(i<j) {
     if (sum < (j - i) * Math.min(height[i], height[j])) {
       sum = (j - i) * Math.min(height[i], height[j])
     }

     if (height[i] <  height[j]) {
       i++
     } else {
       j-- 
     }
   }
   return sum
};

/*
 *  左右遍历法， 向内扩散
 */
