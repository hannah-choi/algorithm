import { numIdenticalPairs } from './1512-Number-of-Good-Pairs';

describe.each([
    [[1, 2, 3, 1, 1, 3], 4],
    [[1, 1, 1, 1], 6],
    [[1, 2, 3], 0]
])(``, (arr, expected) => {
    it(`Number of Good Pairs is ${expected}`, () => {
        expect(numIdenticalPairs(arr)).toBe(expected);
    });
});
