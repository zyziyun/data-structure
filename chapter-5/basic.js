/**
 * 分配函数
 * @param {array[num]} nums 排序数字数组
 * @param {array} queues 队列数组，每一项代表分配的基数数字
 * @param {int} n 进制 
 * @param {int} digit 当前位数，1：个位、10：十
 */
function distribute (nums, queues, n, digit) {
    for (var i = 0; i < n; i++) {
        if (digit === 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        } else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }   
}

/**
 * 出队收集
 * @param {array} queues 队列数组
 * @param {array} nums 排序数组
 */
function collect(queues, nums) {
    // debugger
    var i = 0;
    for (var digit = 0; digit < 10; digit++) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

// 执行程序
var queues = [];
for (var i = 0; i < 10; i++) {
    queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random() * 100);
}
console.log('原始数据：' + nums);
// 个位分布排序
distribute(nums, queues, 10, 1);
collect(queues, nums);
console.log('个位排序后数据：' + nums);
// 十位分布排序
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log('十位排序后数据：' + nums);