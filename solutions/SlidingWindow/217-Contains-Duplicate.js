// Problem: https://leetcode.com/problems/contains-duplicate/

// O(n) Solution
export const containsDuplicate = (nums) => {
    const obj = {}; // Faster than using Set()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (obj[num]) return true;
        else obj[num] = 1;
    }
    return false;
};
