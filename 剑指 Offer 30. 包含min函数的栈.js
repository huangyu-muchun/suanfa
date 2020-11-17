/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack1 = []
    this.stack2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack1.push(x)
    if (!this.stack2.length) {
        this.stack2.push(x)
    } else if (x <= this.stack2[this.stack2.length - 1]) {
        this.stack2.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack1[this.stack1.length - 1] === this.stack2[this.stack2.length - 1]) {
        this.stack2.pop()
    }
    this.stack1.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (!this.stack1.length) return null;
    return this.stack1[this.stack1.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    if (!this.stack2.length) return null;
    return this.stack2[this.stack2.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */