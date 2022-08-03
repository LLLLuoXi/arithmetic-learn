/*
 * @Author: luoxi
 * @LastEditTime: 2022-06-12 12:06:42
 * @LastEditors: your name
 * @Description: 不用arr.shift() 在数组开头添加一个元素，需要把后面所有的元素后移一个位置
 */

const nums = [2, 3, 4, 5]
const newnum = 1;
const len = nums.length;
for (let i = len; i > 0; i--) {
  nums[i] = nums[i - 1];
}
nums[0] = newnum;
console.log('nums', nums); // log : [1, 2, 3, 4, 5]

export default nums;