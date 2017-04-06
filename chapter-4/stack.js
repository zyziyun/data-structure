function Stack () {
    // 保存栈内元素
    this.dataStore = [];
    // 记录栈顶位置
    this.top = 0;
}

Stack.prototype = {
    constructor: Stack,
    // 向栈中压入元素
    push: function (element) {
        this.dataStore[this.top++] = element;
    },
    // 推出最后一个元素
    pop: function () {
        // 为什么不删除这个元素呢
        return this.dataStore[--this.top];
    },
    // 返回第top - 1个元素
    peek: function () {
        return this.dataStore[this.top - 1];
    },
    // 返回栈内元素个数
    length: function () {
        return this.top;
    },
    // 清空一个栈
    clear: function () {
        // 为什么不把dataStore也清空呢
        this.top = 0;
    }
}

// test
// var s = new Stack();
// s.push('David');
// s.push('Raymond');
// s.push('Bryan');
// s.length();
// s.peek();
// var poped = s.pop();
// poped;
// s.peek();
// s.clear();
// s.length();
// s.peek();
// s.push('Clayton');
// s.peek();

// 数制间的相互转换
function mulBase (num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = '';
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}
// 转换为二进制和八进制
mulBase(32, 2);// 100000
mulBase(125, 8);// 175

// 判断回文
function isPalindrome (word) {
    var s = new Stack();
    for (var i = 0; i < word.length;i++){
        s.push(word[i]);
    }
    var rword = '';
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word === rword) {
        return true;
    } else {
        return false;
    }
    console.log(s.dataStore)
}
isPalindrome('hello');// false
isPalindrome('racecar');// true

// 使用栈模拟递归过程
function factorial (n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function fact (n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}
factorial(5);// 120
fact(5);// 120