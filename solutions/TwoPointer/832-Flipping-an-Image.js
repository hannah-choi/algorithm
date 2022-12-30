// Problem: https://leetcode.com/problems/flipping-an-image/

// O(n^2) Solution
export const flipAndInvertImage = (image) => {
    const flip = (arr) => {
        // can be replaced with reverse()
        let i = 0;
        let j = arr.length - 1;
        while (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
        return arr;
    };

    return image.map((item) => flip(item).map((num) => num ^ 1)); // can use .map(num => !num) too
};
