/**
 * 散列表实现
 */
function HashTable () {
    this.table = new Array(137);
}
HashTable.prototype = {
    constructor: HashTable,
    // 定义散列函数, 按照每个字符的ASCII码求和取余数组长度
    simpleHash: function () {
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    },
    // 显示散列表中的数据
    showDistro: function () {
        var n = 0;
        for (var i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(this.table[i]);
            }
        }
    },
    // 将数据存入散列表
    put: function () {
        var pos = this.simpleHash(data);
        this.table[pos] = data;
    },
    get: function () {

    }
}

// 主程序
var someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];
var hTable = new HashTable();
for (var i = 0;)
