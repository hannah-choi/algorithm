import { firstPalindrome } from './2108-Find-First-Palindromic-String-in-the-Array';

describe.each([
    [['abc', 'car', 'ada', 'racecar', 'cool'], 'ada'],
    [['notapalindrome', 'racecar'], 'racecar'],
    [['def', 'ghi'], '']
])('', (arr, expected) => {
    it('first palindromic string in the array', () => {
        expect(firstPalindrome(arr)).toEqual(expected);
    });
});
