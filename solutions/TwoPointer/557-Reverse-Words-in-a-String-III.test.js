import { reverseWords } from './557-Reverse-Words-in-a-String-III';

describe.each([
    ["Let's take LeetCode contest", "s'teL ekat edoCteeL tsetnoc"],
    ['God Ding', 'doG gniD']
])('Sorted case', (str, expected) => {
    it(`The expected str is ${expected}`, () => {
        expect(reverseWords(str)).toEqual(expected);
    });
});
