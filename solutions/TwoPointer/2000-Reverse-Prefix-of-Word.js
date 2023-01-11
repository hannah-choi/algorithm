// Problem: https://leetcode.com/problems/reverse-prefix-of-word

// O(N) solution
export const reversePrefix = (word, ch) => {
    const arr = Array(...word);
    let start = 0;
    let end = -1;

    for (let i = 0; i < arr.length; i++) {
        //findIndex: can be replaced with builtin function
        if (arr[i] === ch) {
            end = i;
            break;
        }
    }

    if (end === -1) return word;

    while (start < end) {
        //reverse: can be replaced with builtin function
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }

    return arr.join('');
};
