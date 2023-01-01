// Problem: https://leetcode.com/problems/intersection-of-two-arrays/

// O(n) Solution
export const intersection = (nums1, nums2) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const obj = {};
    const result = [];

    for (let num of set1) {
        obj[num] = 1;
    }

    for (let num of set2) {
        if (obj[num]) result.push(num);
        obj[num] = 1;
    }

    return result;
};
