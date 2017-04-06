/**
 * 普通链表实现
 */

// 节点类
function Node (element) {
    // 保存节点上的数据
    this.element = element;
    // 保存指向下一个节点的链接
    this.next = null; 
}
// 提供对链表进行操作的方法
function LList () {
    // 属性：使用一个Node对象保存该链表的头节点
    this.head = new Node('head');
}
LList.prototype = {
    constructor: LList,
    // 查找给定的节点
    find: function (item) {
        var currNode = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    },
    // 查找给定的节点前面的节点
    findPrevious (item) {
        var currNode = this.head;
        while (currNode.next !== null && currNode.next.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    },
    // 指定节点后插入节点
    insert: function (newElement, item) {
        // 创建新节点
        var newNode = new Node(newElement);
        // 查找需要插入的位置
        var current = this.find(item);
        // 新节点指向current的下一个节点
        newNode.next = current.next;
        // current节点的下一个节点指向新节点
        current.next = newNode;
    },
    // 删除节点
    remove: function (item) {
        // 找到待删除节点前面的节点
        var prevNode = this.findPrevious(item);
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    },
    // 显示列表中元素
    display: function () {
        // 从头节点开始循环，不显示头节点
        var currNode = this.head;
        while (currNode.next !== null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
}

// 主程序
var cities = new LList();
var length = 10000;
// console.time();
for (var i = 0; i < length; i++) {
    if (i === 0) {
        cities.insert(i, 'head');
    } else {
        cities.insert(i, i - 1);
    }
}
// console.timeEnd();// 240.107ms
// console.time();
// for (var i = length - 1; i >= 0; i--) {
//     cities.remove(i);
// }
// console.timeEnd();// 150.474ms
console.time();
var num = Math.floor(Math.random() * (10000 - 1));
cities.remove(num);
// console.log(num);
console.timeEnd();
// 0.235 .202 .249 .320 .239 .433 .318 .269