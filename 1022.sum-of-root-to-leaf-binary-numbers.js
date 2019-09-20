/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;                                                                                                                                                                                                                                   
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumRootToLeaf = function (root) {
  var sum = 0
  var help = function (root, s) {
    if (root == null) return;
    s += root.val;
    if (root.left == null && root.right == null) {
      sum += parseInt(s, 2);
      return;
    }
    help(root.left, s);
    help(root.right, s);
  }
  help(root,"");
  return sum;
}



