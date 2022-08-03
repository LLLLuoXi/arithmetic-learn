/*
 * @Author: luoxi
 * @LastEditTime: 2022-08-03 23:33:14
 * @LastEditors: your name
 * @Description: 最长连续字符，运用双指针
 */

function maxLengthStr(s) {
    if (s.length = 0) {
        return 0
    }
    let i = 0;
    let j = 0;
    let max = 1;
    for (; i <= s.length; i++) {
        if (s[i] !== s[j]) {
            const count = i - j  // 前面重复字符出现的次数
            if (count > max) {
                // 重复记录一个更大的重复字符数量
                max = count
            }
            j = i
        }
    }
    return max;
}

console.log(maxLengthStr('aabbbab'))
console.log(maxLengthStr('aaabbcd'))
console.log(maxLengthStr('aabc'))
console.log(maxLengthStr('abc'))