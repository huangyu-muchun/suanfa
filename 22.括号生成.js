/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = []

    const go = (str, left, right) => {
        if (str.length == 2 * n && !left && !right) {
            return res.push(str)
        }
        if (left) {
            go(str + '(', left - 1, right)
        }
        if (right > left) {
            go(str + ')', left, right - 1)
        }
    }
    go('', n, n)
    return res
};
// @lc code=end

