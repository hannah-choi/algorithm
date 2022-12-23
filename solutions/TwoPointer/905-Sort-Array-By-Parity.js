// Problem: https://leetcode.com/problems/sort-array-by-parity/

// O(n) Solution
export const sortArrayByParity = (nums) => {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        if (nums[i] % 2 === 0) {
            i++;
        } else if (nums[j] % 2 != 0) {
            j--;
        } else {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    return nums;
};
