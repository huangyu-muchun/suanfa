/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const targetnum = target - nums[i]
        if (targetnum in map) {
            return [map[targetnum], i]
        } else {
            map[nums[i]] = i
        }
    }
};
// @lc code=end

