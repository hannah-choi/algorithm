// Problem: https://leetcode.com/problems/find-the-k-beauty-of-a-number

// O(n) Solution
export const minimumRecolors = (str, k) => {
    let white = 0;
    let min = Infinity;
    let i = 0;

    for (let j = 0; j < str.length; j++) {
        if (str[j] === 'W') white++;
        if (j - i >= k - 1) {
            min = Math.min(min, white);
            if (str[i] === 'W') {
                white--;
            }
            i++;
        }
    }

    return min;
};
