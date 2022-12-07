// Problem: https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

// O(n) Solution
export const numOfSubarrays = (arr, k, threshold) => {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      if (sum / k >= threshold) count++;
      sum -= arr[i - k + 1];
    }
  }
  return count;
};
