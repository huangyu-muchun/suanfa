/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // if (nums1.length > nums2.length)
    //     return intersection(nums2, nums1)
    // let res = new Set()
    // let set = new Set(nums2)
    // for (let i = 0; i < nums1.length; i++) {
    //     if (set.has(nums1[i])) {
    //         res.add(nums1[i])
    //     }
    // }
    // // return Array.from(res) 
    // return [...res]

    
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    if(set1.size>set2.size){
        return intersection(nums2,nums1)
    }
    const res = new Set()
    for(const num of set1){
        if(set2.has(num)){
            res.add(num)
        }
    }
    return [...res]
};
// @lc code=end

