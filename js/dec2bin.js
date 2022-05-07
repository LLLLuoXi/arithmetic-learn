import Stack from './Stack.js';

export default function (decNumber) {
  let stack = new Stack();
  while (decNumber > 0) {
    // 获取余数，放出栈中
    stack.push(decNumber % 2);
    // 获取整除后的结果，作为下次运行的数字
    decNumber = Math.floor(decNumber / 2);
  }
  // 从栈中取出0和1
  let binaryString = '';
  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }
  return binaryString;
}
