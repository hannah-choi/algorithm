import { containsNearbyDuplicate } from './219_Contains Duplicate II';

describe.each([
    [[1, 2, 3, 1], 3, true],
    [[1, 0, 1, 1], 1, true],
    [[1, 2, 3, 1, 2, 3], 2, false]
])(``, (arr, k, expected) => {
    it(`${arr} returns ${expected}`, () => {
        expect(containsNearbyDuplicate(arr, k)).toBe(expected);
    });
});
