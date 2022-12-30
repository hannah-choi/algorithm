// Problem: https://leetcode.com/problems/sort-array-by-parity-ii/

// O(n) in-place solution
export const sortArrayByParityII = (nums) => {
    let i = 0; //even pointer
    let j = 1; //odd pointer

    while (i < nums.length && j < nums.length) {
        if (nums[i] % 2 === 0) {
            i += 2;
        } else if (nums[j] % 2 != 0) {
            j += 2;
        } else {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    return nums;
};
