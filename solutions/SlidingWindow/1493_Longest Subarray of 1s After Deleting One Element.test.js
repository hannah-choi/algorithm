import { longestSubarray } from './1493_Longest Subarray of 1s After Deleting One Element';

describe.each([
    [[1, 1, 0, 1], 3],
    [[0, 1, 1, 1, 0, 1, 1, 0, 1], 5],
    [[1, 1, 1], 2]
])(``, (arr, expected) => {
    it(`Maximum number of consecutive 1's in the array if you delete 1 element is ${expected}`, () => {
        expect(longestSubarray(arr)).toBe(expected);
    });
});
