/*
 * @Author: luoxi
 * @LastEditTime: 2022-06-12 15:28:34
 * @LastEditors: your name
 * @Description: 不用arr.pop() 在数组末尾删除一个元素，需要把前面所有的元素前移一个位置
 */

const nums = [2, 3, 4, 5]
const newnum = 1;
const len = nums.length;
for (let i = len; i > 0; i--) {
  nums[i] = nums[i + 1];
}
console.log('nums', nums); // log : [1, 2, 3, 4, 5]

export default nums;