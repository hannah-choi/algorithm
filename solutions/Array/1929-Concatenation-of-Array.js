// Problem: https://leetcode.com/problems/concatenation-of-array/

// O(n) Solution
export const getConcatenation = (nums) => {
    const n = nums.length;
    const ans = [...nums];
    for (let i = n; i < n * 2; i++) {
        ans[i] = nums[i - n];
    }
    return ans;
};
