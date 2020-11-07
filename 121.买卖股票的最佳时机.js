/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minprice = prices[0], maxprofit = 0
    for (let i = 1; i < prices.length; i++) {

        if (minprice > prices[i]) {
            minprice = prices[i]
        }
        // else if (maxprofit < prices[i] - minprice) {
        //     maxprofit = prices[i] - minprice
        // }
        maxprofit = Math.max(maxprofit, prices[i] - minprice)
    }
    return maxprofit
};
// @lc code=end

