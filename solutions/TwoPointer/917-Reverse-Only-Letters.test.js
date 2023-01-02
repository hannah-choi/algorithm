import { reverseOnlyLetters } from './917-Reverse-Only-Letters';

describe.each([
    ['ab-cd', 'dc-ba'],
    ['a-bC-dEf-ghIj', 'j-Ih-gfE-dCba'],
    ['Test1ng-Leet=code-Q!', 'Qedo1ct-eeLg=ntse-T!']
])(``, (str, expected) => {
    it(`Reversed string is ${expected}`, () => {
        expect(reverseOnlyLetters(str)).toEqual(expected);
    });
});
