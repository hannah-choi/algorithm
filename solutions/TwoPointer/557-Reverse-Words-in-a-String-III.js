//Problem: https://leetcode.com/problems/reverse-words-in-a-string-iii/

//O(n) Solution
export const reverseWords = (s) => {
    let arr = s.split(' ');

    const reverseString = (s) => {
        const str = s.split('');
        let i = 0;
        let j = str.length - 1;
        while (i < j) {
            [str[i], str[j]] = [str[j], str[i]];
            i++;
            j--;
        }
        return str.join('');
    };

    return arr.map((item) => reverseString(item)).join(' ');
};
