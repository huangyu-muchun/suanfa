/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 1
    let res = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) res = nums[i]
        nums[i] === res ? count++ : count--
    }
    return res
};