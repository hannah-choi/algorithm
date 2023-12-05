import { getConcatenation } from './1929-Concatenation-of-Array';

describe.each([
    [
        [1, 2, 1],
        [1, 2, 1, 1, 2, 1]
    ],
    [
        [1, 3, 2, 1],
        [1, 3, 2, 1, 1, 3, 2, 1]
    ]
])(``, (nums, expected) => {
    it(`expected value is ${expected}`, () => {
        expect(getConcatenation(nums)).toStrictEqual(expected);
    });
});
