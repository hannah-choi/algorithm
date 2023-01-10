// Problem: https://leetcode.com/problems/happy-number

// O(N) Solution
export const isHappy = (n) => {
    const set = new Set();

    while (n != 1) {
        let sum = 0;

        while (n != 0) {
            sum += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }

        if (set.has(sum)) {
            return false;
        }

        set.add(sum);
        n = sum;
    }

    return true;
};
