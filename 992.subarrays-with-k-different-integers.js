/*
 * @lc app=leetcode id=992 lang=javascript
 *
 * [992] Subarrays with K Different Integers
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
    
  var count = 0

  if (K === 1) {
    count += A.length
  }
   
  for(var i=0; i < A.length; i++) {
    var temp = [A[i]]
    let size = 1
    for(var j= i + 1; j < A.length; j++) {
      if(temp.indexOf(A[j]) === -1) {
        size++
        temp.push(A[j])
      } else {
        if(size > K) {
          break
        }
      }
      if (size === K) {
        count++
      }
    }
  }
  return count
};

