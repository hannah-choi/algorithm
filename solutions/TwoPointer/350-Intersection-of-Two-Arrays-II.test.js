import { intersect, intersectSorted } from './350-Intersection-of-Two-Arrays-II';

describe.each([
    [
        [1, 2, 2, 1],
        [2, 2],
        [2, 2]
    ],
    [
        [4, 9, 5],
        [9, 4, 9, 8, 4],
        [9, 4]
    ]
])('Unsorted case', (nums1, nums2, expected) => {
    it(`The intersection of two arrays is ${expected}`, () => {
        expect(intersect(nums1, nums2)).toEqual(expected);
    });
});

describe.each([
    [
        [1, 1, 2, 2],
        [2, 2],
        [2, 2]
    ],
    [
        [4, 5, 9],
        [4, 4, 8, 9, 9],
        [4, 9]
    ]
])('Sorted case', (nums1, nums2, expected) => {
    it(`The intersection of two arrays is ${expected}`, () => {
        expect(intersectSorted(nums1, nums2)).toEqual(expected);
    });
});
