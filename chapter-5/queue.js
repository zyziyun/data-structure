function Queue () {
    this.dataStore = [];
}

Queue.prototype = {
    constructor: Queue,
    // 队列尾部添加一个元素
    enqueue: function (element) {
        this.dataStore.push(element);
    },
    // 删除队首元素
    dequeue: function () {
        return this.dataStore.shift();
    },
    // 读取队首元素
    front: function () {
        return this.dataStore[0];
    },
    // 读取队尾元素
    back: function () {
        return this.dataStore[this.dataStore.length - 1];
    },
    // 显示队列内所有元素
    toString: function () {
        return this.dataStore;
    },
    // 判断是否为空
    empty: function () {
        return !this.dataStore.length;
    }
}

// test
// var q = new Queue();
// q.enqueue('Meredith');
// q.enqueue('Cynthia');
// q.enqueue('Jennifer');
// q.toString();
// q.dequeue();
// q.front();
// q.back();

