import { isHappy } from './202-Happy-Number';

describe.each([
    [19, true],
    [2, false]
])(``, (num, expected) => {
    it(`${num} is happy number: ${expected}`, () => {
        expect(isHappy(num)).toEqual(expected);
    });
});
