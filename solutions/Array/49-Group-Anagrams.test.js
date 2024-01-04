import { groupAnagrams } from './49-Group-Anagrams';

describe.each([
    [
        ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
        [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
    ],
    [[''], [['']]],
    [['a'], [['a']]]
])(``, (input, expected) => {
    it(`returns grouped anagram`, () => {
        expect(groupAnagrams(input)).toStrictEqual(expected);
    });
});
