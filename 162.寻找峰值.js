/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let left = 0, rigth = nums.length - 1;
    while (left < rigth) {
        let mid = Math.floor((left + rigth) / 2);
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            rigth = mid;
        }
    }
    return rigth;
};
// @lc code=end

