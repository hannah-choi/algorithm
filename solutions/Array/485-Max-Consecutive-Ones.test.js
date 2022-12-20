import { findMaxConsecutiveOnes } from './485-Max-Consecutive-Ones';

describe.each([
    [[1, 1, 0, 1, 1, 1], 3],
    [[1, 0, 1, 1, 0, 1], 2]
])(``, (arr, expected) => {
    it(`maximum number of consecutive 1 is ${expected}`, () => {
        expect(findMaxConsecutiveOnes(arr)).toBe(expected);
    });
});
