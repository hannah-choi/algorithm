import { replaceElements } from './1299-Replace-Elements-with-Greatest-Element-on-Right-Side';

describe.each([
    [
        [17, 18, 5, 4, 6, 1],
        [18, 6, 6, 6, 1, -1]
    ],
    [[400], [-1]]
])(``, (arr, expected) => {
    it(`needs to compute ${expected}`, () => {
        expect(replaceElements(arr)).toStrictEqual(expected);
    });
});
