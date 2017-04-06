/**
 * 存储队列元素
 * @param {*} name 
 * @param {int} code 表示优先级
 */
function Patient (name, code) {
    this.name = name;
    this.code = code;
}

// 重新定义dequeue函数
// 顺序查找方法寻找优先级最高的元素（code越小，优先级越高）
function dequeue () {
    var entry = 0;
    for (var i = 0; i < this.dataStore.length;i++) {
        if (this.dataStore[i].code < this.dataStore[entry].code) {
            entry = i;
        }
    }
    return this.dataStore.splice(entry, 1);
}

Queue.prototype.dequeue = dequeue;
// 主程序
var ed = new Queue();
// 数据
var data = [
    ['Smith', 5],
    ['Jones', 4],
    ['Fehrenbach', 6],
    ['Brown', 1],
    ['Ingram', 1]
];
// 入队
for (var dd = 0; dd < data.length; dd++) {
    var p = new Patient(data[dd][0], data[dd][1]);
    ed.enqueue(p);
}
console.log('初始数据：' + JSON.stringify(ed.dataStore));
// 出队
var index = 0;
while (!ed.empty()) {
    var seen = ed.dequeue();
    // debugger
    data[index++] = seen[0];
}
console.log('排序后数据：' + JSON.stringify(data));