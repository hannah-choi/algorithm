// Problem: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/

// O(N+M) Solution
export const firstPalindrome = (words) => {
    const isPalindrome = (word) => {
        let j = word.length - 1;
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== word[j]) return false;
            j--;
        }
        return true;
    };

    console.log(words);
    return words.find((item) => isPalindrome(item) === true) || '';
};
