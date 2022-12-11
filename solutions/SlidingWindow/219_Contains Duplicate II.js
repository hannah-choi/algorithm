// Problem: https://leetcode.com/problems/contains-duplicate-ii/description/

// O(n) Solution
export const containsNearbyDuplicate = (nums, k) => {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) return true;
        obj[nums[i]] = 1;
        if (i >= k) obj[nums[i - k]] = 0;
    }
    return false;
};
