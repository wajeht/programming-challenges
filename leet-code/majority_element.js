/**
 * https://leetcode.com/problems/majority-element/
 *
 * @param {number[]} nums
 * @return {number}
 *
 */

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majorityElement = function (nums) {
    const map = {};
    let start = Number.NEGATIVE_INFINITY;
    let final = undefined;

    // put it back inpt map
    for (const i of nums) {
        if (!map[i]) {
            map[i] = 1;
        } else {
            map[i] += 1;
        }
    }

    // loop over the map and see which values and higher
    for (const i in map) {
        if (start < map[i]) {
            start = map[i];
            final = i;
        }
    }

    console.log({ map: map });
    return final;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
