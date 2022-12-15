import { longestOnes } from './1004_Max Consecutive Ones III';

describe.each([
    [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2, 6],
    [[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3, 10],
    [[0, 0, 0, 1], 4, 4]
])(``, (arr, k, expected) => {
    it(`Maximum number of consecutive 1's in the array if you can flip at most k 0's is ${expected}`, () => {
        expect(longestOnes(arr, k)).toBe(expected);
    });
});
