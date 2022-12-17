// Problem: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

// O(n) Solution
export const countGoodSubstrings = (s) => {
    let count = 0;
    let set = new Set();
    let i = 0;

    for (let j = 0; j < s.length; j++) {
        set.add(s[j]);
        if (j - i >= 2) {
            // when the window reaches size of 3
            if (set.size === 3) count++;
            if (s[i] !== s[j] && s[i] !== s[i + 1]) set.delete(s[i]);
            i++;
        }
    }

    return count;
};
