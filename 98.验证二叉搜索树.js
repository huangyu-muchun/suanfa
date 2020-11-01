/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function (root) {

    const helper = (root, min, max) => {
        if (!root) {
            return true;
        }

        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false;
        }
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }

    return helper(root, -Infinity, Infinity);
};

// @lc code=end

