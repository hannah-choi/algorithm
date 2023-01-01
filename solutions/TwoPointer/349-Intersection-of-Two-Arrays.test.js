import { intersection } from './349-Intersection-of-Two-Arrays';

describe.each([
    [[1, 2, 2, 1], [2, 2], [2]],
    [
        [9, 4, 9, 8, 4],
        [4, 9, 5],
        [4, 9]
    ]
])(``, (nums1, nums2, expected) => {
    it(`Intersection of Two Arrays is ${expected}`, () => {
        expect(intersection(nums1, nums2)).toEqual(expected);
    });
});
