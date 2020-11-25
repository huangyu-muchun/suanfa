/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null

    const root = preorder[0]
    const node = new TreeNode(root)

    let i = 0
    for (; i < inorder.length; i++) {  // i有两个含义，一个是根节点在中序遍历结果中的下标，
                                        // 另一个是当前左子树的节点个数
        if (root === inorder[i]) {
            break
        }
    }
    node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i))
    node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1))
    return node
};