import { twoSum } from './1-Two-Sum';

describe.each([
    [[2, 7, 11, 15], 9, [1, 0]],
    [[3, 2, 4], 6, [2, 1]],
    [[3, 3], 6, [1, 0]],
    [[0, 4, 3, 0], 0, [3, 0]]
])(``, (nums, target, expected) => {
    it(`returns the expected indices for the ${target}: ${expected}`, () => {
        expect(twoSum(nums, target)).toStrictEqual(expected);
    });
});
