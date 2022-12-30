import { flipAndInvertImage } from './832-Flipping-an-Image';

describe.each([
    [
        [
            [1, 1, 0],
            [1, 0, 1],
            [0, 0, 0]
        ],
        [
            [1, 0, 0],
            [0, 1, 0],
            [1, 1, 1]
        ]
    ],
    [
        [
            [1, 1, 0, 0],
            [1, 0, 0, 1],
            [0, 1, 1, 1],
            [1, 0, 1, 0]
        ],
        [
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 1],
            [1, 0, 1, 0]
        ]
    ]
])(``, (arr, expected) => {
    it(`flips image: ${expected}`, () => {
        expect(flipAndInvertImage(arr)).toEqual(expected);
    });
});
