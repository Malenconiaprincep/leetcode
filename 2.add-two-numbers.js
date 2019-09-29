/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carray = 0
    const dummy = new ListNode()
    let pointer = dummy
    while(l1 || l2 || carray) {
      let x = l1 !== null ? l1.val : 0
      let y = l2 !== null ? l2.val : 0
      let sum = x + y + carray
      if (sum > 9) {
        pointer.next = new ListNode(sum % 10)
        carray = 1
      } else {
        pointer.next = new ListNode(sum)
        carray = 0
      }

      if (l1) {
        l1 = l1.next
      }
      
      if (l2) {
        l2 = l2.next
      }

      pointer = pointer.next
    }
    return dummy.next
};

/*
 *    思路： 各个位置相加，如果有进位则带给下一位处理
 *    1: 如果 l1, l2 没有next
 */ 
