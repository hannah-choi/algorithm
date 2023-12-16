// Problem: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

//O(n) Solution
export const replaceElements = (arr) => {
    let result = [];
    let max = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        result[i] = max;
        max = Math.max(max, arr[i]);
    }

    return result;
};
