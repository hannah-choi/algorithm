// Problem: https://leetcode.com/problems/intersection-of-two-arrays-ii

// O(N+M) solution (N = nums1.length; M = nums2.length)
export const intersect = (nums1, nums2) => {
    const map = new Map();
    const result = [];
    for (const num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const num of nums2) {
        if (map.get(num) > 0) {
            result.push(num);
            map.set(num, map.get(num || 0) - 1);
        }
    }

    return result;
};

// if it's sorted: O(max(N,M)) solution
export const intersectSorted = (nums1, nums2) => {
    // nums1 = nums1.sort((a, b) => a - b);
    // nums2 = nums2.sort((a, b) => a - b);
    const result = [];

    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};
