import { divisorSubstrings } from "./2269_Find the K-Beauty of a Number";

describe.each([
  [240, 2, 2],
  [430043, 2, 2],
])(``, (num, k, expected) => {
  it(`The number of K-beauty in num is ${expected}`, () => {
    expect(divisorSubstrings(num, k)).toBe(expected);
  });
});
