// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?
 

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

let rotate = function(nums, k) {
    if (k === 0) {
        return nums;
    }
    let count = 0;
    let temp;
    while (count <= k) {
        count++;
        temp = nums[nums.length - 1];
        nums.splice(nums.length - 1, 1);
        nums.unshift(temp);
        if (count === k) {
            return nums;
        }
    }
    return nums;
}

let test = () => {
    console.log(rotate([1,2,3,4,5,6,7], 3))
}
test()