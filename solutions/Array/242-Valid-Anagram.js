// Problem: https://leetcode.com/problems/valid-anagram/description/

// O(n) Solution
export const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const compare = {};

    for (let c of s) {
        compare[c] = (compare[c] || 0) + 1;
    }

    for (let c of t) {
        if (!compare[c]) {
            return false;
        }
        compare[c]--;
    }

    return true;
};
