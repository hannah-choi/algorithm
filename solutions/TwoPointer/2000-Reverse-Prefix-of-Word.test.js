import { reversePrefix } from './2000-Reverse-Prefix-of-Word';

describe.each([
    ['abcdefd', 'd', 'dcbaefd'],
    ['xyxzxe', 'z', 'zxyxxe'],
    ['abcd', 'z', 'abcd']
])('', (str, char, expected) => {
    it('start reversing string when first ch is in the given string', () => {
        expect(reversePrefix(str, char)).toEqual(expected);
    });
});
