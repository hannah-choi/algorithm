import { containsDuplicate } from './217_Contains Duplicate';

describe.each([
    [[1, 2, 3, 1], true],
    [[1, 2, 3, 4], false],
    [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true]
])(``, (arr, expected) => {
    it(`${arr} returns ${expected}`, () => {
        expect(containsDuplicate(arr)).toBe(expected);
    });
});
