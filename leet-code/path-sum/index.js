// * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }

var hasPathSum = function (root, targetSum) {
  // base case:
  if (root === null) return false;
  if (root.left === null && root.right === null) {
    return root.val === targetSum;
  } else {
    let leftHasPath = false;
    let rightHasPath = false;
    if (root.left) {
      leftHasPath = hasPathSum(root.left, targetSum - root.val);
    }
    if (root.right) {
      rightHasPath = hasPathSum(root.right, targetSum - root.val);
    }
    return leftHasPath || rightHasPath;
  }
};
