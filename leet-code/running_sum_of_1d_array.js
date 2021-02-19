/**
 * https://leetcode.com/problems/running-sum-of-1d-array/
 *
 * @param {number[]} nums
 * @return {number[]}
 *
 * My implementation
 */

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

const runningSum = function (nums) {
    const array = [];
    let base = 0;

    for (let i = 0; i < nums.length; i++) {
        const currentElement = nums[i];

        base += currentElement;

        array.push(base);
    }

    return array;
};

console.log(runningSum([1, 2, 3, 4]));
