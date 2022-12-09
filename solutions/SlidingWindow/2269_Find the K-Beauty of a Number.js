// Problem: https://leetcode.com/problems/find-the-k-beauty-of-a-number

// O(n) Solution
export const divisorSubstrings = (num, k) => {
  let str = num.toString();
  let curr = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    curr += str[i];
    if (i >= k - 1) {
      if (num % parseInt(curr) === 0) count++;
      curr = curr.substring(1);
    }
  }

  return count;
};
