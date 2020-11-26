/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return null
    let n = 0, cur = head
    while (++n && cur.next)
        cur = cur.next
    cur.next = head
    k = k % n
    while (++k < n)
        head = head.next
    let tmp = head
    head = head.next
    tmp.next = null
    return head
};
// @lc code=end

