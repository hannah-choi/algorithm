import { maxDistance } from './2078-Two-Furthest-Houses-With-Different-Colors';

describe.each([
    [[1, 1, 1, 6, 1, 1, 1], 3],
    [[1, 8, 3, 8, 3], 4],
    [[0, 1], 1],
    [[6, 6, 6, 6, 6, 6, 6, 6, 6, 19, 19, 6, 6], 10]
])(``, (colors, expected) => {
    it(`returns the maximum distance between two houses with different colors: ${expected}`, () => {
        expect(maxDistance(colors)).toBe(expected);
    });
});
