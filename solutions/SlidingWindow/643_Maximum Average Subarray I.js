// Problem: https://leetcode.com/problems/maximum-average-subarray-i/

// O(n) Solution
export const findMaxAverage = (nums, k) => {
    if (nums.length === 1) return nums[0];
    let currentSum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        currentSum = currentSum + nums[i];
        if (i >= k - 1) {
            maxSum = Math.max(currentSum, maxSum);
            currentSum -= nums[i - k + 1];
        }
    }

    return maxSum / k;
};
