// Problem: https://leetcode.com/problems/max-consecutive-ones/

// Solution
export const findMaxConsecutiveOnes = (nums) => {
    let max = 0;
    let curr = 0;
    for (let i = 0; i < nums.length; i++) {
        curr += nums[i];
        if (nums[i] === 0) {
            curr = 0;
        }
        max = Math.max(max, curr);
    }
    return max;
};
