import { sortArrayByParity } from './905-Sort-Array-By-Parity';

describe.each([
    [
        [3, 1, 2, 4],
        [4, 2, 1, 3]
    ],
    [[0], [0]]
])(``, (arr, expected) => {
    it(`Reversed string is ${expected}`, () => {
        expect(sortArrayByParity(arr)).toEqual(expected);
    });
});
