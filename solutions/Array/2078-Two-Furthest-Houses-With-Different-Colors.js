// problem: https://leetcode.com/problems/two-furthest-houses-with-different-colors

// O(n) Solution
export const maxDistance = (colors) => {
    let result = 1;
    let end = colors.length - 1;

    for (let i = 0; i < colors.length - 1; i++) {
        if (colors[i] !== colors[end]) {
            result = Math.max(result, end - i, i - 0);
        }
    }

    return result;
};
