// Problem: https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

// O(n) Solution
export const longestSubarray = (nums) => {
    let zero = 0;
    let j = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) zero++;
        while (zero > 1) {
            if (nums[j] === 0) zero--;
            j++;
        }
        max = Math.max(max, i - j);
    }
    return max;
};

console.log(longestSubarray([1, 1, 0, 1]));
