/**
 * https://leetcode.com/problems/move-zeroes/
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 // didn't get to finish the problem




// Input: [0, 1, 0, 3, 12];
// Output: [1, 3, 12, 0, 0];

// var moveZeroes = function (nums) {
//     console.log({ nums: nums, nums_length: nums.length });
//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             count += 1;
//             nums.splice(i, 1);
//         }
//     }

//     console.log({ count: count });
//     while (count) {
//         nums.push(0);
//         count--;
//     }

//     console.log({ return: nums });
//     return nums;
// };



// best practice 
// -------------------------------------------------------------------

var moveZeroes = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[count++] = nums[i];
        }
    }

    for (let i = count; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};

console.log(moveZeroes([0, 0, 1]));
//console.log(moveZeroes([0, 1, 0, 3, 12]));
