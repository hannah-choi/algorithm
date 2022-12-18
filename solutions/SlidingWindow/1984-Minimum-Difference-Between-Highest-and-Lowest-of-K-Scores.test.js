import { minimumDifference } from './1984-Minimum-Difference-Between-Highest-and-Lowest-of-K-Scores';

describe.each([
    [[90], 1, 0],
    [[9, 4, 1, 7], 2, 2]
])(``, (nums, k, expected) => {
    it(`The minimum possible difference betweem the highest and the lowest of the ${k} scores is ${expected}`, () => {
        expect(minimumDifference(nums, k)).toBe(expected);
    });
});
