import { countGoodSubstrings } from './1876_Substrings of Size Three with Distinct Characters';

describe.each([
    ['xyzzaz', 1],
    ['aababcabc', 4]
])(``, (str, expected) => {
    it(`The number of good strings in ${str} is ${expected}`, () => {
        expect(countGoodSubstrings(str)).toBe(expected);
    });
});
