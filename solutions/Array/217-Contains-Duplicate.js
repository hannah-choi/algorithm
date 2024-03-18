// Problem: https://leetcode.com/problems/contains-duplicate/description/

// O(n) Solution
export const containsDuplicate = (nums) => {
    const obj = {}
    for(let i = 0; i <= nums.length; i++) {
        if(obj[nums[i]]) {
            return true
        } else {
            obj[nums[i]] = 1
        }
    }
    return false;
};