import { sortArrayByParityII } from './922-Sort-Array-By-Parity-II';

describe.each([
    [
        [4, 2, 5, 7],
        [4, 5, 2, 7]
    ],
    [
        [2, 3],
        [2, 3]
    ]
])('', (arr, expected) => {
    it('sorts the array by parity', () => {
        expect(sortArrayByParityII(arr)).toEqual(expected);
    });
});
