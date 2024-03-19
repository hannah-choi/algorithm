export const isPalindrome = (s) => {
    const converted = s.replace(/[^0-9a-z]/gi, '').toLowerCase() //(/\W/g, '') is same but includes underscore 
    if(converted === '') return true;

    let start = 0;
    let end = converted.length - 1;

    while(start < end) {
        if(converted[start] !== converted[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};