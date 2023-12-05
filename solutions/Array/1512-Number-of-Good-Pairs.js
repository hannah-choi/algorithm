// Problem: https://leetcode.com/problems/number-of-good-pairs/

// O(n) solution
export const numIdenticalPairs = (nums) => {
    const obj = {};

    for (let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }

    return Object.values(obj)
        .map((item) => (item * (item - 1)) / 2)
        .reduce((a, b) => a + b, 0);
};
