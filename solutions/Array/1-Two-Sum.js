// problem: https://leetcode.com/problems/two-sum/

// O(n) solution
export const twoSum = (nums, target) => {
    const hashmap = new Map(); //to store numbers previously passed
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (hashmap.has(difference)) {
            return [i, hashmap.get(difference)];
        }
        hashmap.set(nums[i], i);
    }
};
