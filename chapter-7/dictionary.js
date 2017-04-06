/**
 * 字典实现
 */
function Dictionary () {
    this.datastore = new Array();
}
Dictionary.prototype = {
    constructor: Dictionary,
    // 添加
    add: function (key, value) {
        this.datastore[key] = value;
    },
    // 查找
    find: function (key) {
        return this.datastore[key];
    },
    // 删除
    remove: function (key) {
        delete this.datastore[key];
    },
    // 显示字典中所有的键值对
    showAll: function () {
        // 对键名进行重排序
        var arr = Object.keys(this.datastore).sort();
        for (var i = 0; i < arr.length; i++) {
            var key = arr[i];
            console.log(key + ' -> ' + this.datastore[key])
        }
    },
    // 字典元素个数
    count: function () {
        // 当数组的键的类型为字符串的时候，length属性就不管用了
        return Object.keys(this.datastore).length;
    },
    // 清除
    clear: function () {
        for (var key in this.datastore) {
            delete this.datastore[key];
        }  
    }
}

// 主程序
var pbook = new Dictionary();
// pbook.add('Mike', '123');
// pbook.add('David', '345');
// pbook.add('Cynthia', '456');
// console.log(pbook.find('David'));
// pbook.remove('David');
// pbook.showAll();
// console.log(pbook.count());
// pbook.clear();
// console.log(pbook.count());
// debugger
pbook.add('Raymond', '123');
pbook.add('David', '345');
pbook.add('Cynthia', '456');
pbook.add('Mike', '723');
pbook.add('Jennifer', '987');
pbook.add('Danny', '012');
pbook.add('Jonathan', '666');
pbook.showAll();