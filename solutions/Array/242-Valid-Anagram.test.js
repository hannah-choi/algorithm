import { isAnagram } from './242-valid-anagram';

describe.each([
    ['anagram', 'nagaram', true],
    ['rat', 'car', false]
])(``, (s, t, expected) => {
    it(`string ${s} and ${t} is ${expected ? '' : 'not '}anagram`, () => {
        expect(isAnagram(s, t)).toBe(expected);
    });
});
