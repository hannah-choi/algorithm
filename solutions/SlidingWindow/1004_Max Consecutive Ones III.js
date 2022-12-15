// Problem: https://leetcode.com/problems/max-consecutive-ones-iii/description/

// O(n) Solution
export const longestOnes = (nums, k) => {
    let max = 0;
    let zero = 0;
    let j = 0; //start

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) zero++;
        while (zero > k) {
            //when the zero count is greater than k, the window needs to be shrunk
            if (nums[j] === 0) zero--;
            j++;
        }
        max = Math.max(max, i - j + 1);
    }

    return max;
};
