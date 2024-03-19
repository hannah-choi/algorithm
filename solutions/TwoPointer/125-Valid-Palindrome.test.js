import { isPalindrome } from "./125-Valid-Palindrome";

describe.each([
    ["A man, a plan, a canal: Panama", true],
    ["race a car", false],
    [" ", true],
    ["ab_a", true]
])(``, (input, expected)=> {
    it(`should check if ${input} is palindrome`, ()=> {
        expect(isPalindrome(input)).toBe(expected)
    })
})