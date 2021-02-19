/**
 * https://leetcode.com/problems/single-number/
 *
 * @param {number[]} nums
 * @return {number}
 *
 */
var singleNumber = function (nums) {
    const map = {};

    for (const i of nums) {
        if (!map[i]) {
            map[i] = 1;
        } else {
            map[i] += 1;
        }
    }

    for (const i in map) {
        if (map[i] === 1) {
            return i;
        }
    }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
