/**
 * 散列表实现
 */
function HashTable () {
    this.table = new Array(137);
}
HashTable.prototype = {
    constructor: HashTable,
    // 定义散列函数, 按照每个字符的ASCII码求和取余数组长度
    simpleHash: function (data) {
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        console.log('Hash value：' + data + '->' + total);
        return total % this.table.length;
    },
    // 使用霍纳算法的更好的散列函数
    betterHash: function (string) {
        const H = 37;
        var total = 0;
        for (var i = 0; i < string.length; i++) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        console.log('Hash value: ' + total + ' -> ' + string);
        return parseInt(total);
    },
    // 显示散列表中的数据
    showDistro: function () {
        var n = 0;
        for (var i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(i + '：' + this.table[i]);
            }
        }
    },
    // 将数据存入散列表
    put: function (data) {
        // var pos = this.simpleHash(data);
        var pos = this.betterHash(data);
        this.table[pos] = data;
    },
    // 
    get: function () {

    },
    // 生成随机整数
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    genStuData: function (arr) {
        for (var i = 0; i < arr.length; i++) {
            var num = '';
            for (var j = 1; j <= 9;j++) {
                num += Math.floor(Math.random() * 10);
            }
            // num +=
        }
    }
}

// 主程序
var someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; i++) {
    hTable.put(someNames[i]);
}
// debugger
hTable.showDistro();