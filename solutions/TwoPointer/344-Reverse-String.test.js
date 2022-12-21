import { reverseString } from './344-Reverse-String';

describe.each([
    [
        ['h', 'e', 'l', 'l', 'o'],
        ['o', 'l', 'l', 'e', 'h']
    ],
    [
        ['H', 'a', 'n', 'n', 'a', 'h'],
        ['h', 'a', 'n', 'n', 'a', 'H']
    ]
])(``, (str, expected) => {
    it(`Reversed string is ${expected}`, () => {
        expect(reverseString(str)).toEqual(expected);
    });
});
