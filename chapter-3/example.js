function List () {
    this.listSize = 0;
    this.pos = 0;
    // 保存列表元素
    this.dataStore = [];
}
// 实现一个列表
List.prototype = {
    constructor: List,
    // 清空
    clear: function () {
        delete this.dataStore;
        //创建空数组， 设置新的空列表
        this.dataStore.length = 0;
        this.listSize = this.pos = 0;
    },
    // 辅助方法
    find: function (element) {
        // 是否可以用indexOf代替？？
        for (var i = 0; i < this.dataStore.length;i++){
            if (this.dataStore[i] === element) {
                return i;
            }
        }
        // 错误校验
        return -1;
    },
    // 显示列表元素
    toString: function () {
        // 目的是显示当前状态
        return this.dataStore;
    },
    // 插入
    insert: function (element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    },
    // 给列表添加元素
    append: function (element) {
        // 新元素就位后，变量listSize加1
        this.dataStore[this.listSize++] = element;
    },
    // 从列表中删除元素
    /*  1. 先找到该元素（find）
        2. 然后删除他，(splice)
        3. 调整底层数组对象以填补删除该元素的空白*/
    remove: function (element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            this.listSize--;
            return true;
        }
        return false;
    },
    // 移动到第一个元素
    front: function () {
        this.pos = 0;
    },
    // 移动到最后一个元素上
    end: function () {
        this.pos = this.listSize - 1;
    },
    // 向前一个
    prev: function () {
        if (this.pos > 0) {
            this.pos--;
        }
    },
    // 向后移动一个元素
    next: function () {
        if (this.pos < this.listSize - 1) {
            this.pos ++;
        }
    },
    // 元素个数
    length: function () {
        return this.listSize;
    },
    // 返回当前指向
    currPos: function () {
        return this.pos;
    },
    // 移动到某个指向
    moveTo: function (position) {
        this.pos = position;
    },
    // 返回当前指向的元素
    getElement: function () {
        return this.dataStore[this.pos];
    },
    // 判断给定值是否在列表中
    contains: function (element) {
        // indexOf??
        for (var i = 0; i < this.dataStore.length;i++) {
            if (this.dataStore[i] === element) {
                return true;
            }
            return false;
        }
    },
    // this.pos 是否可以再次加1
    hasNext () {
        return this.pos < this.listSize - 1;
    },
    // this.pos 是否可以再次加1
    hasPrev () {
        return this.pos > 0;
    }
};

var movies = fs.readFile('./films.txt');