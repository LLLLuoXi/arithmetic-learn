export default function Stack() {
  this.items = [];
  // 将元素压入栈
  Stack.prototype.push = function (ele) {
    this.items.push(ele);
  };
  // 从栈中取出元素
  Stack.prototype.pop = function () {
    return this.items.pop();
  };
  // 查看一下栈顶元素
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };
  // 判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  };
  // 获取栈中元素的个数
  Stack.prototype.size = function () {
    return this.items.length;
  };
  // toString
  Stack.prototype.toString = function () {
    let result = '';
    for (const item of this.items) {
      result += item + '';
    }
    return result;
  };
}
