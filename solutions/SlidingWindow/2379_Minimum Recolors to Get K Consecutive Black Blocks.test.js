import { minimumRecolors } from './2379_Minimum Recolors to Get K Consecutive Black Blocks';

describe.each([
    ['WBBWWBBWBW', 7, 3],
    ['WBWBBBW', 2, 0]
])(``, (str, k, expected) => {
    it(`The minimum number of operations needed to get k consecutive black blocks is ${expected}`, () => {
        expect(minimumRecolors(str, k)).toBe(expected);
    });
});
