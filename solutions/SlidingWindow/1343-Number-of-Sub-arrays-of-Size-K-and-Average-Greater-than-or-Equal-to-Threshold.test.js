import { numOfSubarrays } from './1343-Number-of-Sub-arrays-of-Size-K-and-Average-Greater-than-or-Equal-to-Threshold';

describe.each([
    [[2, 2, 2, 2, 5, 5, 5, 8], 3, 4, 3],
    [[11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5, 6]
])(``, (arr, k, thresold, expected) => {
    it(`Subarray of size ${k} and average greater than or equal to ${thresold} returns ${expected}`, () => {
        expect(numOfSubarrays(arr, k, thresold)).toBe(expected);
    });
});
