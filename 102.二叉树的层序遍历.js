/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return;
    const res = []
    const queue = [root]
    while (queue.length) {
        const level = queue.length
        const levelNodes = []
        for (let i = 0; i < level; i++) { 
            const node = queue.shift()
            
            levelNodes.push(node.val)
            console.log(levelNodes)
           
            if(node.left) queue.push(node.left) 
            if(node.right) queue.push(node.right) 
        }
        res.push(levelNodes)
    }
    return res
};
// @lc code=end

