/**
 * 循环链表实现
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
    this.head.next = this.head;
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
        while (currNode.next !== null && currNode.next.element !== 'head' && currNode.next.element !== item) {
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
        // 检查头节点
        while (currNode.next !== null && currNode.next.element !== 'head') {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    },
    // 反序显示循环链表中的元素
    dispReverse: function () {
        var currNode = this.head;
        var prevNode = this.findPrevious(currNode.element);
        while (prevNode.element !== currNode.element && prevNode.element !== 'head') {
            console.log(prevNode.element);
            currNode = prevNode;
            prevNode = this.findPrevious(currNode.element);
        }
    }
}

var cities = new LList();
cities.insert('Conway', 'head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma', 'Carlisle');
console.log('链表整体数据：============');
cities.display();
cities.remove('Russellville');
console.log('删除数据Russellville后数据：============');
cities.display();
// debugger
console.log('反转展示数据：============');
console.time();
cities.dispReverse();
console.timeEnd();// 1.213ms

// 主程序
// var cities = new LList();
// var length = 10000;
// // console.time();
// for (var i = 0; i < length; i++) {
//     if (i === 0) {
//         cities.insert(i, 'head');
//     } else {
//         cities.insert(i, i - 1);
//     }
// }
// console.timeEnd();// 240.107ms
// console.time();
// for (var i = length - 1; i >= 0; i--) {
//     cities.remove(i);
// }
// console.timeEnd();// 150.474ms
// console.time();
// var num = Math.floor(Math.random() * (10000 - 1));
// cities.remove(num);
// console.log(num);
// console.timeEnd();
// 0.235 .202 .249 .320 .239 .433 .318 .269