// Problem:

// O(n) solution
export const reverseOnlyLetters = (s) => {
    const arr = Array.from(s);
    let i = 0;
    let j = arr.length - 1;

    const isLetter = (str) => {
        return str.toLowerCase() != str.toUpperCase();
    };

    while (i < j) {
        if (isLetter(arr[i]) && isLetter(arr[j])) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        } else if (!isLetter(arr[i])) {
            i++;
        } else {
            j--;
        }
    }

    return arr.join('');
};
