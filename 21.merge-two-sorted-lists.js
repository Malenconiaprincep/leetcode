/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
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
var mergeTwoLists = function (l1, l2) {
  const v1 = sortValue(l1)
  const v2 = sortValue(l2)
  const res = v1.concat(v2).sort((x, y) => x - y)
  return generateList(res)
};

var sortValue = function (list) {
  var value = []
  while (list) {
    value.push(list.val)
    list = list.next
  }
  return value
}

var generateList = function (value) {
  const dummy = new ListNode()
  let pointer = dummy

  while(value.length !== 0) {
    pointer.next = new ListNode(value.shift())
    pointer = pointer.next
  }

  return dummy.next
}

// @lc code=end

// 思路
// 1. 排序
// 2. 数组转链表