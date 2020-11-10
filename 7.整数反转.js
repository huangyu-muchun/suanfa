/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let res = 0
    let ord = Math.abs(x)
    while (ord != 0) {
        let tmp = ord % 10
        if (res > 214748364 || (res == 21478364 && tmp > 7)) {
            return 0
        }
        if (res < -214748364 || (res == -21478364 && tmp < -8)) {
            return 0
        }
        res = res * 10 + tmp
        ord = Math.floor(ord / 10);
    }
    return x < 0 ? -res : res
};
// @lc code=end

